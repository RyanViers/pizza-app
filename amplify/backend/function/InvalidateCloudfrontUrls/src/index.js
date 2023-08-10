const AWS = require("aws-sdk");
const region = process.env.REGION;

AWS.config.update({
    maxRetries: 0,
    region: region
});

const distributionId = process.env.DISTRIBUTION_ID;
const cloudfront = new AWS.CloudFront();

function okResponse(data) {
    const okResponse = {
        statusCode: 200,
        body: data
    };

    return okResponse;
}

function errorResponse(err) {
    const errorResponse = {
        statusCode: 400,
        body: err.message
    };

    return errorResponse;
}

async function invalidateUrls(urls) {
  return new Promise((resolve, reject) => {    
    const params = {
      DistributionId: distributionId,
      InvalidationBatch: {
        CallerReference: Date.now().toString(),
        Paths: {
          Quantity: urls.length,
          Items: urls
        },
      },
    };
    
    cloudfront.createInvalidation(params, function (err, data) {
      if (err) {reject(err)} 
      else {resolve(true);}
    });
  })
}
  
//LAMBDA FUNCTION HANDLER
exports.handler = async event => {

  try {
    const urls = event.arguments.urls;
    await invalidateUrls(urls);
    return okResponse(true);      
  } catch (error) {
    return errorResponse(error)
  }
};

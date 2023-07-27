import gql from 'graphql-tag';

export default gql`
  mutation createEmployee($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      id
      name
      address
      phone
      date_of_birth
      date_hired
      user_role
      annual_salary
    }
  }
`;

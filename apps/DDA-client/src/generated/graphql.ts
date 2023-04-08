import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateFileInput = {
  awsUrl: Scalars['String'];
  fileName: Scalars['String'];
  ownerName: Scalars['String'];
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateTagInput = {
  tagName: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  awsUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  downloadCount?: Maybe<Scalars['Int']>;
  fileName: Scalars['String'];
  id: Scalars['String'];
  ownerName: Scalars['String'];
  user?: Maybe<User>;
};

export type FileResponse = {
  __typename?: 'FileResponse';
  awsUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  downloadCount?: Maybe<Scalars['Int']>;
  fileName: Scalars['String'];
  id: Scalars['String'];
  ownerName: Scalars['String'];
};

export type FileTag = {
  __typename?: 'FileTag';
  file?: Maybe<File>;
  id: Scalars['String'];
  tag?: Maybe<Tag>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFile: SuccessResponse;
  createTag: SuccessResponse;
  createUser: SuccessResponse;
  login?: Maybe<LoginResponse>;
};


export type MutationCreateFileArgs = {
  createFileInput: CreateFileInput;
};


export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationLoginArgs = {
  userInput?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  findAllFile: Array<Maybe<FileResponse>>;
  findAllTag: Array<Maybe<Tag>>;
  findAllUser: Array<Maybe<User>>;
  tag?: Maybe<Tag>;
  user?: Maybe<User>;
};


export type QueryFileArgs = {
  id: Scalars['ID'];
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success: Scalars['Boolean'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  tagName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateFileMutationVariables = Exact<{
  createFileInput: CreateFileInput;
}>;


export type CreateFileMutation = { __typename?: 'Mutation', createFile: { __typename?: 'SuccessResponse', success: boolean } };

export type CreateUserMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'SuccessResponse', success: boolean } };

export type LoginMutationVariables = Exact<{
  userInput?: InputMaybe<UserInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', username: string, access_token: string } | null };

export type FindAllTagQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTagQuery = { __typename?: 'Query', findAllTag: Array<{ __typename?: 'Tag', id: string, tagName: string } | null> };

export type FindAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUserQuery = { __typename?: 'Query', findAllUser: Array<{ __typename?: 'User', id: string, password: string, username: string } | null> };


export const CreateFileDocument = gql`
    mutation CreateFile($createFileInput: CreateFileInput!) {
  createFile(createFileInput: $createFileInput) {
    success
  }
}
    `;
export type CreateFileMutationFn = Apollo.MutationFunction<CreateFileMutation, CreateFileMutationVariables>;

/**
 * __useCreateFileMutation__
 *
 * To run a mutation, you first call `useCreateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFileMutation, { data, loading, error }] = useCreateFileMutation({
 *   variables: {
 *      createFileInput: // value for 'createFileInput'
 *   },
 * });
 */
export function useCreateFileMutation(baseOptions?: Apollo.MutationHookOptions<CreateFileMutation, CreateFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFileMutation, CreateFileMutationVariables>(CreateFileDocument, options);
      }
export type CreateFileMutationHookResult = ReturnType<typeof useCreateFileMutation>;
export type CreateFileMutationResult = Apollo.MutationResult<CreateFileMutation>;
export type CreateFileMutationOptions = Apollo.BaseMutationOptions<CreateFileMutation, CreateFileMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($userInput: UserInput!) {
  createUser(userInput: $userInput) {
    success
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($userInput: UserInput) {
  login(userInput: $userInput) {
    username
    access_token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const FindAllTagDocument = gql`
    query FindAllTag {
  findAllTag {
    id
    tagName
  }
}
    `;

/**
 * __useFindAllTagQuery__
 *
 * To run a query within a React component, call `useFindAllTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllTagQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllTagQuery(baseOptions?: Apollo.QueryHookOptions<FindAllTagQuery, FindAllTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllTagQuery, FindAllTagQueryVariables>(FindAllTagDocument, options);
      }
export function useFindAllTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllTagQuery, FindAllTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllTagQuery, FindAllTagQueryVariables>(FindAllTagDocument, options);
        }
export type FindAllTagQueryHookResult = ReturnType<typeof useFindAllTagQuery>;
export type FindAllTagLazyQueryHookResult = ReturnType<typeof useFindAllTagLazyQuery>;
export type FindAllTagQueryResult = Apollo.QueryResult<FindAllTagQuery, FindAllTagQueryVariables>;
export const FindAllUserDocument = gql`
    query FindAllUser {
  findAllUser {
    id
    password
    username
  }
}
    `;

/**
 * __useFindAllUserQuery__
 *
 * To run a query within a React component, call `useFindAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUserQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUserQuery, FindAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUserQuery, FindAllUserQueryVariables>(FindAllUserDocument, options);
      }
export function useFindAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUserQuery, FindAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUserQuery, FindAllUserQueryVariables>(FindAllUserDocument, options);
        }
export type FindAllUserQueryHookResult = ReturnType<typeof useFindAllUserQuery>;
export type FindAllUserLazyQueryHookResult = ReturnType<typeof useFindAllUserLazyQuery>;
export type FindAllUserQueryResult = Apollo.QueryResult<FindAllUserQuery, FindAllUserQueryVariables>;
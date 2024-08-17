import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./token";

const token = getToken();

export const pageIndicator = makeVar("");
export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);
export const isMobileVar = makeVar(false);
//uri

// 라이브서버ㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓㅓ

export const UPLOAD_URI = "";
const uri = "";
const httpLink = createHttpLink({ uri });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "pf-jwt": authTokenVar() || "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedInVar: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
        },
      },
    },
  }),
});

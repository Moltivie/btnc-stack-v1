/* eslint-disable import/no-anonymous-default-export */
export default {
  providers: [
    {
      domain: `https://${process.env.CLERK_ISSUER}.clerk.accounts.dev/`,
      applicationID: "convex",
    },
  ],
};

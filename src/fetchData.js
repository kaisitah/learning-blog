const ENDPOINT_URL = "https://resolved-monkfish-37.hasura.app/v1/graphql";
const COMMENTS_QUERY = `
    query {
        Blog_Comments {
            post_id
            post_title
            comment_text
        }
    }
`;

export const fetchComments = async () => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: COMMENTS_QUERY
        })
    });
    
    return await response.json();
};

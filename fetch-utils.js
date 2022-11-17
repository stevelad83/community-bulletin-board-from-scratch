const SUPABASE_URL = 'https://yhtqjrmxupxpmxmjrqpo.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodHFqcm14dXB4cG14bWpycXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgyNTQsImV4cCI6MTk4MzY4NDI1NH0.Bp6AKfoL4GrrPbg0WYAwHMhKSaKZFGfEYwaewQNhY4M';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function fetchPosts() {
    const response = await client.from('posts').select('*');
    return response.data;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

// export async function signInUser(email, password) {
//     const response = await client.auth.signIn({ email, password });
//     console.log(response, 'response');
//     return response.user;
// }

export async function signInUser(email, password) {
    console.log(client.auth.session());
    const response = await client.auth.signIn({ email, password });
    console.log(response);
    return response;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('/');
}

// export async function createNewPost(post);

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

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('/');
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

export async function createNewPost(post) {
    const response = await client.from('posts').insert(post);
    return response;
}

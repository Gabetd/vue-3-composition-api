import { ref } from "vue";

export default function usePost(){

    const posts = ref([])

    const post = ref()
    
    const fetchAll = async () => {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts")

        posts.value = await res.json()

    }

    const fetchOne = async (id) => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        post.value = await res.json()

    }


    return {
        posts,

        post,
        
        fetchAll,

        fetchOne
    }
}
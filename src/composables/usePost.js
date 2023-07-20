import { ref } from "vue";

export default function usePost(){

    const posts = ref([])

    const fetchAll = async () => {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts")

        posts.value = await res.json()

    }

    return {
        posts,

        fetchAll
    }
}
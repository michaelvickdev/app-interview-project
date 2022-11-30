import axios from "axios"

const buildUrl = (path) => `http://localhost:4001${path}`

const Api = {
    register: async (data) => {
        return axios.post(buildUrl("/auth/register"), data)
            .then(r => r.data)
    },
    registryItem: {
        query: async (data) => {
            return axios.get(buildUrl("/registry/items"), data)
                .then(r => r.data)
        },
        create: async (data) => {
            return axios.post(buildUrl("/registry/items"), data)
                .then(r => r.data)
        },
        delete: async (item) => {
            return axios.delete(buildUrl(`/registry/items/${item.id}`))
                .then(r => r.data)
        }
    },
}

export default Api
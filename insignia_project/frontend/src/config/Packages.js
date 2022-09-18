import api from ".";

const Packages = {
    find: () => api.get('packages').then(res => res.data),
    detail: (id) => api.get(`/packages/${id}`).then(res => res.data)
}

export default Packages;
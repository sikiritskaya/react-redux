const deletePostApi = (id) =>{
    return  fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
        method: "DELETE",
      })
}

export default deletePostApi

export default function httpReq(data = {
    method: "GET" || "POST" || "DELETE" || "PUT",
    path: "",
    data: {} 
}) {
    return new Promise((resolve)=> {
        const formdata = new FormData();
        formdata.append("data", data.data);
        const http = new XMLHttpRequest();
        http.open(data.method, data.path, true);
        http.onreadystatechange = function() {
            console.log(http.status);
            if (http.status === 200 && http.readyState === 4) {
                resolve(http.responseText);
            }
        }
        http.send(formdata);
    })
}
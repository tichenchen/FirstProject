/**
 * Created by lenovo on 2016-05-20.
 */

const http = 'http://dytestfirst.azurewebsites.net/tables/'
export const data = {
    executeQuery:function(user,paw)
        {
        fetch(http+'User?ZUMO-API-VERSION=2.0.0', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username:user,
                password:paw,
            })
        }).then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
            })
            .catch((error) => {
                console.warn(error);
            });
    },

    deleteQuery:function(id) {
        fetch(http+'user/'+id, {
            method: "DELETE",
            headers: {
                "ZUMO-API-VERSION": "2.0.0",
            },
        }).then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
            })
            .catch((error) => {
                console.warn(error);
            });
    },

    updateQuery:function(message,id) {
        fetch(http+'user/'+id, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "ZUMO-API-VERSION": "2.0.0",
            },
            body: JSON.stringify({
                password:message
            })
        }).then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
            })
            .catch((error) => {
                console.warn(error);
            });
    },

    selectQuery:function(id) {
        fetch(http+'user/'+id, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "ZUMO-API-VERSION": "2.0.0",
            },
        }).then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
            })
            .catch((error) => {
                console.warn(error);
            });
    }
}







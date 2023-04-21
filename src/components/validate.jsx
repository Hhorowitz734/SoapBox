//File to validate user entering site (returns user object if a document token cookie exists)


function Validate({ token, setUserDoc }){
    //Takes in a token, sets state of user object if token matches with db

    async function Decrypt(token, setUserDoc){

        try{
            await fetch('http://localhost:9998/decrypt', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            })
            .then(response => response.json())
            .then(data => {
                setUserDoc(data.user);
            })
            .catch(error => console.error(error));
        }  catch (e){
            console.log('here');
            console.alert(e);
        } 
        
    }
    Decrypt(token, setUserDoc);

    return (
        <div></div>
    )
}

export default Validate;
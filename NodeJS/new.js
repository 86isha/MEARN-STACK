const getdata = async () => {
    try{
        const response = await fetch("https://dummyjson.com/users"); //add link to your jason data in brackets
        datas = await response.json(); //data is in object(binary) format ==>
            console.log(datas);
    }catch(error){
        console.log(error);
    }
};
const main = async () =>{
    await getdata();

}
main();
                



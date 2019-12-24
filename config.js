const data = {}
if(process.env.ENV === "prod"){
    data.PORT=process.env.PORT
    data.mongo_url="atlas"
}
else{
    data.PORT=3333
    data.mongo_url="localhost"
}
module.exports=data
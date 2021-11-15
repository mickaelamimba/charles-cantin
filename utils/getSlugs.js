export const formatReturn = async(data)=>{
   const datas= await Promise.all(data)
   return JSON.parse(JSON.stringify(datas))
}
export const parsStringSug =(string)=>{
    return string.replace(/\s+/g,'-').toLowerCase()
}

export  const getSlugs =((context)=>{
    const keys = context.keys()
    const data = keys.map((key,index)=>{
        let slug = key.replace(/^.*[\\\/]/,'').slice(0,-3)
        return slug
    })
    return data
})
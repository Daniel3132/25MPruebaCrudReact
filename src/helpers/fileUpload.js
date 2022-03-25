export const fileUpload = async (file)=>{
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dcyn2bjb9/upload'
    const formData = new FormData()
    formData.append('upload_preset','cloudEstudiante')
    formData.append('file', file)

    const resp = await fetch(cloudUrl, {
        method:'POST',
        body:formData
    })


    const cloudResp = await resp.json()

    console.log(cloudResp)
    console.log('fileupload')

    return cloudResp.secure_url
}

import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI.JS"
//to add resumeAPI-POST-done after user clicks finish button in stepper-so in step component



export const addResumeAPI= async(resume)=>{
    return await commonAPI("POST",`${BASEURL}/all-resume`,resume)
}

// to edit resume api-PUT.called by edit component after clicking update button in modal
export const editResumeAPI=async(id,resume)=>{
    return await commonAPI("PUT",`${BASEURL}/all-resume/${id}`,resume)
}


// to add resume to historyapi -POST-called by preview component when finish button is clicked
export const addDownloadHistoryAPI= async(resume)=>{
    return await commonAPI("POST",`${BASEURL}/history`,resume)
}

//get history api-to see all created -called by history component when its page is opened in browser -so use useffect hook-(to give additional feature to a function)
// so whenever we want to open a page and show data from a component,we have to use useeffect in that component


// resumes-GET-fromlocalhost3000
export const getHistoryAPI=async()=>{
    return await commonAPI('GET',`${BASEURL}/history`,{})
}

// to delete history api-DELETE
// means the history server has array of objects as items,whenever id is typed after base url-it shows that single resume-so we have to delete the items by using its id
// also delete is called in history component whenever the  delete button is clicked

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${BASEURL}/history/${id}`,{})
}


// getAResumeAPI-GET .it is called by edit component when it is opened in browser
export const getAResumeAPI = async(id)=>{
    return await commonAPI("GET",`${BASEURL}/all-resume/${id}`,{})
}
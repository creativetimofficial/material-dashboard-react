import { Button } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { MdAddAPhoto } from "react-icons/md"
import { AiOutlineCloudUpload } from "react-icons/ai"
import FUStyles from "./FUStyles"

function FileUpload({ callback, clearBool }) {
  const [fileImage, setFileImage] = useState("")
  const [fileName, setFilename] = useState(null)
  const [load, setLoad] = useState(false)
  const [viewBool, setViewBool] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [nameImage, setNameImage] = useState("")

  const getImage = (e) => {
    console.log("getImage", e.target.files[0], e.target.files[0].nameImage)
    setFileImage(e.target.files[0])
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setNameImage(e.target.files[0].nameImage)
    setFilename(objectUrl)
    setViewBool(true)
  }

  useEffect(() => {
    if (clearBool) {
      setFileImage("")
      setFilename(null)
      setViewBool(false)
      setIsUploaded(false)
    }
  }, [clearBool])

  const setImage = async (body) => {
    const url = `http://165.232.85.45:1988/koinot/attachment/uploadPhotoFileList/NEWS?requestMethod=POST`
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjg2MDcyNjYwLCJleHAiOjE2ODc4MDA2NjB9.m8116Hfe7CamK9cHHAdhpv9ZRvi9Kg-CxTabAjtydfXVLamgr6sArqzOEscN7swspNjOzlw62XgOhPy3aB-lAw",
      },
    }
    try {
      const res = axios.post(url, body, config)
      setFilename(res.data.object[0].link)
      callback(res)
      console.log("resresresres", res)
      setLoad(false)
      setIsUploaded(true)
      return res
    } catch (error) {
      setLoad(false)
      console.error(error)
      return { error: true }
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData1 = new FormData()
    formData1.append("file", fileImage, nameImage)
    console.log("formData1", formData1)
    setImage(formData1)
    setLoad(true)
  }

  return (
    <FUStyles>
      <form onSubmit={onSubmit} className={viewBool ? "w-50" : "w-100"}>
        <div className={`${viewBool ? "d-block" : "d-none"} upload-model w-100`}>
          <div>
            <img src={fileName !== null ? fileName : ""} alt="" className="w-100" height="100px" />
            <textarea
              width="100%"
              className="form-control"
              id="image_name"
              value={nameImage}
              onChange={(e) => setNameImage(e.target.value)}
              rows="1"
            />
          </div>
        </div>
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          style={{ display: "none" }}
          onChange={getImage}
        />
        <label htmlFor="icon-button-file" className="w-100">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component="span"
            startIcon={<MdAddAPhoto />}
          >
            {fileName !== null ? "Rasmni o'zgartrish" : "Rasmni yuklash"}
          </Button>
        </label>
        <br /> <br />
        <Button
          className={viewBool ? "" : "d-none"}
          fullWidth
          variant="contained"
          color="primary"
          component="span"
          onClick={onSubmit}
          startIcon={<AiOutlineCloudUpload />}
          type="submit"
        >
          Saqlash
        </Button>
        <br /> <br />
        <div className={`${isUploaded ? "d-block" : "d-none"} p-3 badge bg-success`}>
          <p> Rasm quyildi va postga !</p>
        </div>
        <div className={`${load ? "d-block" : "d-none"} `}>
          <div className="lds-ripple">
            <div>loading</div>
            {/* <div></div> */}
          </div>
        </div>
        <br />
      </form>

      {/* <div className="w-75 m-auto">
        <img src={fileName ? fileName : ""} alt="" className="img-fluid" />
      </div> */}
    </FUStyles>
  )
}

export default FileUpload

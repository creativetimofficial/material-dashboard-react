import { useState, useEffect } from "react"
import MDEditor from "@uiw/react-md-editor"
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import DateMomentUtils from "@date-io/moment"

import {
  MdOutlineAddCircleOutline,
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdOutlineDownloadDone,
} from "react-icons/md"
import {
  Button,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core"
import { Box, Grid } from "@mui/material"
import MDSnackbar from "components/MDSnackbar"
import AddModal from "layouts/dashboard copy/modals/addModal"
import MDInput from "components/MDInput"
import ModalKoinot from "layouts/analysis24/modalKoinot"
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import FileUpload from "layouts/analysis24/FileUpload"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"

function TextUz() {
  // -------------important------------
  const [important, setImportant] = useState(false)
  // ----------------tags------------
  const [tags, setTag] = useState([])
  const [rece, setRece] = useState([])
  // categories
  const [cats, setCats] = useState([])
  const [categ, setCateg] = useState(1)

  // ---------time ------
  const [evTime, setEvTime] = useState(null)
  const [viewTime, setViewTime] = useState(null)
  // ----------textlink-----------
  const [textlink, setTextlink] = useState("")
  const [uzText, setUztext] = useState("")
  const [uzTitle, setUztitle] = useState("")
  console.log(uzText)
  console.log(uzTitle)
  console.log(textlink)
  // ---------img id---------
  const [img, setImg] = useState(null)
  const [clearImgBool, setClearImgBool] = useState(false)

  const pictureId = (value) => {
    setImg(value.data.object[0].fileId)
  }

  // function CPFunction(content) {
  //   return content
  // }

  const setChildData = async (body, success, successCallback) => {
    const url = `http://165.232.85.45:1988/koinot/newsChild`
    const headers = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjg2MDcyNjYwLCJleHAiOjE2ODc4MDA2NjB9.m8116Hfe7CamK9cHHAdhpv9ZRvi9Kg-CxTabAjtydfXVLamgr6sArqzOEscN7swspNjOzlw62XgOhPy3aB-lAw",
      },
    }
    try {
      const res = await axios.post(url, body, headers)
      success(true)
      successCallback(`Post o'zgartirildi`, "s")
      return res
    } catch (error) {
      successCallback(`Logout qilib qayta kiring`, "e")
      console.error(error)
      return { error: true }
    }
  }

  const setData = async (body, path, callback, model) => {
    const url = `http://165.232.85.45:1988/koinot/news`
    const token = localStorage.getItem("Token")
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    }
    try {
      const res = await axios.post(url, body, headers)

      if (path !== "news") {
        callback("d-block", res.data.object)
        model(`Post ${res.data.object.id} muvaffaqiyatli joylandi`, res.data)
      } else {
        callback("d-block", "child")
        model("Post tarkibi muvaffaqiyatli joylandi")
      }
      return res
    } catch (error) {
      callback("d-block")
      model("Post joylashda xatolik! Maydonlarni to'liq to'ldirmagan bo'lishingiz mumkin")
      console.error(error)
      return { error: true }
    }
  }

  // upload by draftjs
  const uploadImageCallBack = (file) => {
    const token = localStorage.getItem("Token")
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(
        "POST",
        "http://165.232.85.45:1988/koinot/attachment/uploadPhotoFileList/NEWS_CHILD?requestMethod=POST"
      )
      xhr.setRequestHeader("Authorization", `Bearer ${token}`)
      const data = new FormData()
      data.append("image", file)
      xhr.send(data)
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText)
        console.log(response.object[0].link)
        resolve({
          data: {
            link: response.object[0].link,
          },
        })
      })
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText)
        console.log(error)
        reject(error)
      })
    })
  }

  // ----------- finish --------
  const [modal, setModal] = useState("d-none")
  const [modalContent, setModalConent] = useState()
  const [poster, setPoster] = useState(null)

  const closeModal = (val) => {
    setModal(val)
  }

  const finallyResult = () => {
    const setupModal = (value, data) => {
      setModal(value)
      if (data !== "child") setPoster(data)
    }
    const contentModal = (value) => {
      setModalConent(value)
    }
    const cleanFields = () => {
      setUztitle()
      setUztext()
      setTag([])
      setTextlink()
      setEvTime(null)
      setViewTime(null)
      setCateg(null)
    }
    console.log("poster", poster)
    if (poster !== null) {
      const object = {
        fileId: img,
        link: textlink,
        newsId: poster.id,
        textUz: uzText,
        titleUz: uzTitle,
      }
      setChildData(object)
      setClearImgBool(false)

      // const conf = confirm("Yana tarkib qushasizmi ?")

      toast.success("Yana tarkib qushasizmi ?")
      if (toast.success) {
        setImg(null)
        setClearImgBool(true)
        cleanFields()
      } else {
        // CPFunction(true)
        cleanFields()
        setPoster(null)
        setClearImgBool(true)
        setImg(null)
      }
    } else {
      const objectKoinot = {
        attachmentId: img,
        categoryId: categ,
        tagIds: tags.map((v) => v.id),
        status: important !== true ? "IMPORTANT" : "UNIMPORTANT",
        link: textlink,
        textUz: uzText,
        timeToView: viewTime,
        eventTime: evTime,
        titleUz: uzTitle,
      }
      if (img !== null) {
        const PermissionChild = async () => {
          await setData(objectKoinot, "news", setupModal, contentModal)
        }
        PermissionChild()
      } else {
        setModalConent("Rasm joylashtiring")
        setModal("d-block")
      }
    }
  }

  // Succes Notification
  const [categoriesRef, setCategoriesRef] = useState(false)

  const [successSB, setSuccessSB] = useState({ open: false, message: "" })
  const openSuccessSB = (mes) => setSuccessSB({ open: true, message: mes })
  const closeSuccessSB = () => setSuccessSB({ open: false })
  // Error Notification
  const [errorSB, setErrorSB] = useState({ open: false, message: "" })
  const openErrorSB = (errorMes) => setErrorSB({ open: true, message: errorMes })
  const closeErrorSB = () => setErrorSB({ open: false })

  //  Add Category
  const addCategory = (add) => {
    console.log(add)
    const myHeaders = new Headers()
    const token = localStorage.getItem("Token")
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer access_${token}`)

    const raw = JSON.stringify({
      textEn: add.addEng,
      textRu: add.addRus,
      textUz: add.addUzb,
      textUzK: add.addUzbK,
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch("http://165.232.85.45:1988/koinot/category", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result)
        console.log(typeof res.message, res.success)
        if (res.success === 200) {
          openSuccessSB("Category added successfully")
          setCategoriesRef(!categoriesRef)
        }
      })
      .catch((error) => {
        console.log(error)
        openErrorSB(`Category not added ${error}`)
      })
  }
  //  If the add new tag
  const tagcontrolAdd = (tag) => {
    console.log(tag)
    const myHeaders = new Headers()
    const token = localStorage.getItem("Token")
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    const raw = JSON.stringify({
      textEn: tag.addEng,
      textRu: tag.addRus,
      textUz: tag.addUzb,
      textUzK: tag.addUzbK,
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch("http://165.232.85.45:1988/koinot/tag", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(typeof res.message, res.success)
        if (res.success === 200) {
          openSuccessSB("TagController addtag successfully")
          setCategoriesRef(!categoriesRef)
        }
      })
      .catch((error) => {
        console.log(error)
        openErrorSB(`TagController not Addtag ${error}`)
      })
  }
  // get tags from teh server
  useEffect(() => {
    const requestOptions = {
      method: "GET",
    }

    fetch("http://165.232.85.45:1988/koinot/tag", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setTag(data.objectKoinot)
      })
  }, [categoriesRef])

  const setTags = (id) => {
    const recArray = [...rece]
    const oneTag = recArray.filter((v) => v.id === id)
    const array = [...tags, oneTag[0]]
    setTag(array)

    const recarray = [...rece]
    const item = recarray.find((e) => e.id === id)
    recarray.splice(rece.indexOf(item), 1)

    setRece(recarray)
  }

  const returnTags = (id) => {
    // qowilgan taglardan idga togri keladigani olib bazdan keganlagan qowildi
    const tag = [...tags]
    const oneTag = tag.filter((v) => v.id === id)[0]
    const array = [...rece]
    array.unshift(oneTag)
    setRece(array)

    // qowilgan taglardan id-ga tori keladigani olib tawlandi
    const tagsarray = [...tags]
    const index = tags.map((x) => x.id).indexOf(id)
    tagsarray.splice(index, 1)
    setTag(tagsarray)
  }

  //  Categories information api
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    fetch("http://165.232.85.45:1988/koinot/category", requestOptions)
      .then((response) => response.json())
      .then((data) => setCats(data.objectKoinot))
  }, [categoriesRef])

  //  Notifications
  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content={successSB.message}
      open={successSB.open}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  )
  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content={errorSB.message}
      open={errorSB.open}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  )

  return (
    <>
      <MDBox
        mt={1}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDTypography variant="h6" color="white">
          Analysis24 : Uzbek
        </MDTypography>
        <Button variant="contained" color="secondary" component="span">
          Kiril matniga nusxalash
        </Button>
      </MDBox>
      <Card pt={3}>
        <MDBox className="container" data-color-mode="light">
          <Box
            margin="20px 0 20px 0"
            className="form-group w-100"
            display="flex"
            alignItems="center"
          >
            <MDBox width="50%">
              <MDInput
                style={{ width: "97%", fontSize: "16px" }}
                margin="auto"
                placeholder="title"
                className="form-control"
                id="titleUz"
                value={uzTitle}
                onChange={(e) => setUztitle(e.target.value)}
                rows="1"
              />
            </MDBox>
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth width="50%">
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={important}
                  value={important}
                  label="Statusni tanlang"
                  onChange={(e) => setImportant(e.target.value)}
                >
                  <MenuItem value={false}>Dolzarb emas</MenuItem>
                  <MenuItem value={true !== false}>Dolzarb</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <MDEditor
            uploadCallback={() => uploadImageCallBack()}
            // CPFunction={CPFunction}
            value={uzText}
            onChange={(e) => setUztext(e)}
          />
          <Grid display="flex" justifyContent="space-between" margin="20px 0 0 0">
            <MDBox display="flex" flexDirection="column" width="25%">
              <MDInput
                className="form-control"
                // id="textlink"
                value={textlink}
                placeholder="Link"
                onChange={(e) => setTextlink(e.target.value)}
                rows="1"
              />
              <MDBox margin="20px 0 0 0">
                <AddModal tagtitle="Yangi Tag Qo'shish" saveBtn={(e) => tagcontrolAdd(e)} />
              </MDBox>
            </MDBox>
            <MDBox display="flex" flexDirection="column" width="20%">
              <Card container item xs={3}>
                {/* tags -------- DON'T TOUCH IT---------- */}
                <MDBox className="max-width">
                  <MDTypography className="fw-bold m-0">Postga qushilgan teglar</MDTypography>{" "}
                  <br />
                  <Card className="d-flex flex-wrap">
                    {tags.length !== 0
                      ? tags.map((teg) => (
                          <Button
                            key={teg.id}
                            onClick={() => returnTags(teg.id)}
                            className="badge badge-pill badge-primary d-flex badge-border-suc border-info text-info"
                          >
                            <h5 className="m-0">{teg.textUz}</h5>
                            <h5 className="m-0">
                              <MdOutlineDownloadDone className="ms-2" />
                            </h5>
                          </Button>
                        ))
                      : "hali teg qo'shmadingiz"}
                  </Card>
                  <hr />
                  {/* <p> Bazada bor teglar</p> */}
                  <MDTypography> Bazada bor teglar</MDTypography>
                  <MDBox className="d-flex flex-wrap">
                    {rece.map((red) => (
                      <Button
                        className="badge badge-primary badge-border-suc  text-success d-flex p-2"
                        onClick={() => setTags(red.id)}
                      >
                        <h5 className="m-0">{red.textUz}</h5>
                        <h5 className="m-0">
                          <MdOutlineAddCircleOutline className="ms-2" />
                        </h5>
                      </Button>
                    ))}
                  </MDBox>
                </MDBox>
                {/* tags -------- DON'T TOUCH IT---------- */}
              </Card>
            </MDBox>
            <MDBox display="flex" flexDirection="column" width="20%" c>
              <FormControl fullWidth margin="20px">
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categ}
                  label={cats.length !== 0 ? cats[0].textUz : "Kategoriyalar yo'q"}
                  onChange={(e) => setCateg(e.target.value)}
                >
                  {cats.map((v) => (
                    <MenuItem value={v} key={v.id}>
                      {v.textUz}
                      <IconButton
                        onClick={() => setCateg(v.id)}
                        color={v.id === categ ? "secondary" : "default"}
                      >
                        {categ === v.id ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
                      </IconButton>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <MDBox margin="20px 0 20px 0">
                <AddModal title="Kategoriya Qo'shish" saveBtn={(e) => addCategory(e)} />
              </MDBox>
              {/* modal */}
              <Button
                onClick={finallyResult}
                variant="contained"
                color="secondary"
                component="span"
              >
                Submit{" "}
              </Button>
              <ModalKoinot display={modal} content={modalContent} callback={closeModal} />
              <div>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            </MDBox>
            <MDBox display="flex" flexDirection="column" width="20%">
              <MuiPickersUtilsProvider utils={DateMomentUtils}>
                <DatePicker
                  value={evTime}
                  onChange={(e) => setEvTime(e.format("yyyy.MM.DD HH:mm"))}
                  autoOk
                  ampm={false}
                  label="Hodisa bo'lgan vaqti"
                  inputVariant="outlined"
                  format="yyyy.MM.DD HH:mm"
                />
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateMomentUtils}>
                <DatePicker
                  value={viewTime}
                  onChange={(e) => setViewTime(e.format("yyyy.MM.DD HH:mm"))}
                  autoOk
                  ampm={false}
                  label="Saytga ko'rinish vaqti"
                  inputVariant="outlined"
                  format="yyyy.MM.DD HH:mm"
                />
              </MuiPickersUtilsProvider>
              <MDBox>
                <FileUpload callback={pictureId} clearBool={clearImgBool} came={img != null} />
              </MDBox>
            </MDBox>
          </Grid>
        </MDBox>
        {renderErrorSB}
        {renderSuccessSB}
      </Card>
    </>
  )
}
export default TextUz

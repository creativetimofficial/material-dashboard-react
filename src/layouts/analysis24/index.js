import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import TextRu from "./Tabs/tabru/TextRu"
import TextUzk from "./Tabs/tabuzk/TextUzk"
import TextUz from "./Tabs/tabuz/TextUz"
import TextEn from "./Tabs/taben/TextEn"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const [uzText, setUztext] = React.useState("")
  const [uzTitle, setUztitle] = React.useState("")

  const [uzkvalue, setUzKValue] = React.useState("")
  const [uzktext, setUzktext] = React.useState("")

  const [ruTitle, setRUTitle] = React.useState("")
  const [rutext, setRUText] = React.useState("")

  const [engText, setEngText] = React.useState("")
  const [engtitle, setEngTitle] = React.useState("")

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <DashboardLayout>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Text Uz" {...a11yProps(0)} />
            <Tab label="Text UzK" {...a11yProps(1)} />
            <Tab label="Text Ru" {...a11yProps(2)} />
            <Tab label="Text En" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <TextUz uzTitle={uzTitle} setUztitle={setUztitle} uzText={uzText} setUztext={setUztext} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextUzk
            uzKirile={uzkvalue}
            setUzKirile={setUzKValue}
            setUzkText={setUzktext}
            uzkText={uzktext}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TextRu ruTitle={ruTitle} setRutitle={setRUTitle} ruText={rutext} setRutext={setRUText} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TextEn
            engTitle={engtitle}
            setEngtitle={setEngTitle}
            engText={engText}
            setEngtext={setEngText}
          />
        </TabPanel>
      </div>
    </DashboardLayout>
  )
}

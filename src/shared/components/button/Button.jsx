import btnStyles from "./styles.module.css";
import cx from "classnames";

function GeneralButton({ buttonText, actionOnSubmit, data, keysArray, buttonClasses, primary }) {

  const handleOnClick = (e) => {
    e.preventDefault();
    const paramsArr = keysArray.map(key => data[key]);
    actionOnSubmit(...paramsArr);
  }

  const actualBtnClasses = [btnStyles.btn];
  buttonClasses && actualBtnClasses.push(buttonClasses);

  return (
    <>
      <button onClick={(e) => handleOnClick(e)} className={cx({ [btnStyles.primary]: primary }, ...actualBtnClasses)}>
        {buttonText}
      </button>
    </>
  )
}

export default GeneralButton
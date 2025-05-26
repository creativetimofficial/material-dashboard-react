import { useNavigate } from "react-router-dom";

import SaleForm from "../sale-form";
import GeneralButton from "../../shared/components/button";

import "../../shared/styles/GeneralStyles.css";

function CreateSale({ addSale, updateField, saleSelected, fetchClients, clientsList }) {

  const navigate = useNavigate();
  const navigateData = {
    url: '/sales/list',
  }

  const addSaleData = {
    saleSelected: saleSelected,
  }

  return (
    <>
      <div>
        <SaleForm
          formFieldChange={updateField}
          fetchClients={fetchClients}
          clientsList={clientsList}
          saleSelected={saleSelected}>
        </SaleForm>
        <div>
          <GeneralButton
            buttonText={'Crear'}
            actionOnSubmit={addSale}
            data={addSaleData}
            keysArray={['saleSelected']}
            buttonClasses={'mb-15'}
            primary>
          </GeneralButton>
        </div>
        <div>
          <GeneralButton
            buttonText={'Quiero regresar a la lista'}
            actionOnSubmit={navigate}
            data={navigateData}
            keysArray={['url']}
            buttonClasses={'mb-15 btn-secondary'}>
          </GeneralButton>
        </div>
      </div>
    </>
  )
}

export default CreateSale;
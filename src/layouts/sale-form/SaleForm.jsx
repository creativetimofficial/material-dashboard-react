import "./styles.css";
import "../../shared/styles/GeneralStyles.css";

function SaleForm({ saleSelected, formFieldChange, fetchClients, clientsList }) {

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    formFieldChange(value, name);
    switch (name) {
      case 'taxIdSearch':
        fetchClients({ tax_id: value });
        break;

      default:
        break;
    }
  }

  const foundClientsList = () => {
    return (
      <>
        {/* {
          clientsList?.map(client => {
            <option value={client.id}>{client.name}</option>
          })
        } */}
      </>
    );
  }

  return (
    <>
      <form>
        <div className='divForm mb-15'>
          <div>
            <label>
              Ingresa NIT de Cliente:
            </label>
            <div className="mb-15">
              <input
                type="number"
                name="taxIdSearch"
                value={saleSelected?.taxIdSearch || ""}
                onChange={handleChange}
              />
              <select
                name="selectedClient"
                value={saleSelected?.selectedClient || ""}
                onChange={handleChange}>
                {foundClientsList()}
              </select>
            </div>
            <label>
              Ingresa el idioma en que está la película:
            </label>
            <div>
              <select
                name="language"
                value={saleSelected?.language || ""}
                onChange={handleChange}>
                <option value="Español">Español</option>
                <option value="Inglés">Inglés</option>
                <option value="Japonés">Japonés</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
          <div>
            <label>
              Costo de alquiler por noche:
            </label>
            <div className="mb-15">
              <input
                type="number"
                name="costPerNight"
                value={saleSelected?.costPerNight || ""}
                onChange={handleChange}
              />
            </div>
            <label>
              Costo de compra:
            </label>
            <div>
              <input
                type="number"
                name="costToBuy"
                value={saleSelected?.costToBuy || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <label>Link hacia la imagen de portada (opcional):
        </label>
        <div className="mb-15">
          <input
            type="text"
            name="img"
            value={saleSelected?.img || ""}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  )
}

export default SaleForm
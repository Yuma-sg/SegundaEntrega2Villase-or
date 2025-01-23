const FormCheckout = ({dataform, handleChangeInput, handleChangeForm}) => {
    return (
        <form onSubmit={handeSubmitForm} >
            <label>Nombre Completo</label>
            <input type="text" value={dataform.fullName} name="fullname" onChange={handleChangeInput} />

            <label>Teléfono</label>
            <input type="number" value={dataform.phone} name="phone" onChange={handleChangeInput} />

            <label>Email</label>
            <input type="email" value={dataform.email} name="email" onChange={handleChangeInput} />

            <button type="submit">Enviar</button>

        </form>
    )
}
export default FormCheckout
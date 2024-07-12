
const Forms = () => {
    return (
        <>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="firstname" placeholder="firstname" value={firstname} />
                </form>
            </fieldset>
        </>
    )
}

export default Forms
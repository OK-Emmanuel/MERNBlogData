export function Contact() {
    
    function handleSubmit(){
        
    }
    
    return (
        <>
           <h1>Contact Us</h1>
           <p>Want to suggest improvements? Let's talk</p>
           <
            form onSubmit={handlesubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" maxLength={100} name="name"  required onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input type="email" maxLength={200} required name="description"  onChange={(e) => setDescription(e.target.value)}/>

            <label htmlFor="message">Message</label>
            <textarea name="message" maxLength={1000}  required id="" onChange={(e) =>   setContent(e.target.value)}></textarea>

            <button type="submit">Submit</button>
           </form>
        </>
    )
}
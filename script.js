function paging(){
const API_URL = "https://www.anapioficeandfire.com/api/books";


async function fetchData() {

    try {

        const response = await fetch(API_URL);
        if (!response.status === 200) throw new error("Error occured...");
        const data = await response.json();
       
        //Display in HTML
        const bookData = document.getElementById("books");
        let bookHTML = "";
        
        data.forEach(({name, isbn, numberOfPages, authors, publisher, released}) => {
            bookHTML += `<p>Book Name: <b> ${name}</b><br>
                            ISBN: <b>${isbn}</b><br>
                            Pages: <b>${numberOfPages}</b><br>
                            Authors: <b>${authors}</b><br>
                            Publisher: <b>${publisher}</b><br>
                            Released date: <b>${released}</b><br><br><br>
                            `
        });

            bookData.innerHTML = bookHTML;
      
      //  })
    }
    catch (err) {
        console.log(err.message);
    }
}
fetchData();
}
paging();

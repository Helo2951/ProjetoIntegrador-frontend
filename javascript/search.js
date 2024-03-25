document.getElementById('searchButton').addEventListener('click', search)

export function search(e) {
    // e.preventDefault();

    const searchText = document.getElementById('search').value.toLowerCase();
    const items = document.getElementsByClassName('wrap').children; 
    // const itemsLength = document.getElementsByClassName('wrap').children.length;

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        const itemId = element.id.toLowerCase();

        if (itemId.includes(searchText) || element.textContent.toLowerCase().includes(searchText)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
        
    }

    console.log(items.length)
}


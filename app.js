const URL = "https://thronesapi.com/api/v2/Characters"
const req = new XMLHttpRequest()
req.open("GET", URL)
req.responseType="json"
req.onload = () => {
    let pers = req.response
    const lima = document.querySelector('.main')
    for (let i of pers) {
        const items = document.createElement('div')
        const title = document.createElement('div')

        items.style.cssText = 'width: 160px;height: 195px;border: 1px solid black;display: flex;flex-direction: column;background-size: cover;background-position: center;border-radius: 10px;s'
        title.style.cssText = 'border-top: 2px solid black;border-bottom: 2px solid black;width: 100%;height: 40px;background-color: aliceblue;margin-top: 80%;text-align: center;font-family:"Bruno Ace SC", cursive;padding-top: 6%;box-sizing: border-box;'
        

        image = i.imageUrl
        items.style.backgroundImage = `url(${image})`

        if (i.firstName == "") {
            title.innerHTML = i.lastName
        }
        else {
            title.innerHTML = i.firstName
        }
        
        items.append(title)
        items.addEventListener('click', () => {
            const body = document.querySelector('.bod')
            body.innerHTML = ''
            const charac = document.createElement('div')
            const first = document.createElement('div')
            const img = document.createElement('div')
            const desc = document.createElement('div')
            charac.style.cssText = `
            width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 2px solid black;
            margin-left: 20px;
            `
            first.style.cssText = `
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 100px;
            `
            img.style.cssText = `
            width: 30%;
            background-size: cover;
            background-position: center;
            `
            desc.style.cssText = `
            width: 70%;
            `
            console.log(i.imageUrl)
            localStorage.setItem('img', i.imageUrl)     
            localStorage.setItem('name', i.fullName)     
            localStorage.setItem('title', i.title)     
            localStorage.setItem('family', i.family)     
            img.style.backgroundImage = `url(${i.imageUrl})`
            desc.innerHTML = `${i.fullName}<br>${i.title}<br>${i.family}`

            first.append(img)
            first.append(desc)

            charac.append(first)
            body.append(charac)
        })
        
        lima.append(items)
        if (localStorage.getItem('name') != undefined) {
            const body = document.querySelector('.bod')
            body.innerHTML = ''
            const charac = document.createElement('div')
            const first = document.createElement('div')
            const img = document.createElement('div')
            const desc = document.createElement('div')
            charac.style.cssText = `
            width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 2px solid black;
            margin-left: 20px;
            `
            first.style.cssText = `
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 100px;
            `
            img.style.cssText = `
            width: 30%;
            background-size: cover;
            background-position: center;
            `
            desc.style.cssText = `
            width: 70%;
            `
            console.log(i.imageUrl)
            img.style.backgroundImage = `url(${localStorage.getItem('img')})`
            desc.innerHTML = `${localStorage.getItem('name')}<br>${localStorage.getItem('title')}<br>${localStorage.getItem('family')}`

            first.append(img)
            first.append(desc)

            charac.append(first)
            body.append(charac)
        }
    }

}
req.send()

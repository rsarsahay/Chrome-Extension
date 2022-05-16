//function saveLead()
	//console.log("Button clicked from onclick attribute")

/*let myLeads = []
let oldLeads = [] 
const inputEl =  document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =  document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))    //localStorage.clear()

if(leadsFromLocalStorage){
	myLeads = leadsFromLocalStorage
	render(myLeads)
}

function render(leads){
 let listItems =""
   for(let i=0; i< leads.length; i++){
	
	
	 //listItems += "<li><a target = '_blank'href='" + myLeads + "'>" + myLeads[i] +  "</a></li>"
	 listItems += `
	                 <li>
	                     <a target='_blank' href='${leads[i]}'>
					        ${leads[i]}
					     </a>
					 </li> `
	// create element
	// set text content
	// append to ul
	// const li = document.createElement("li")
	// li.textContent= myLeads[i]
	// ulEl.append(li)
	   
    }
	ulEl.innerHTML=listItems
  }

deleteBtn.addEventListener("dblclick", function() {
	localStorage.clear()
	myLeads=[]
	render(myLeads)
	
})

//console.log(leadsFromLocalStorage)

//localStorage.setItems("myName","Ritu Sarsahay")

//let name =localStorage.setItems("myName") 
//console.log(name)
//localStorage.clear(name)

inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value)
	 inputEl.value = ""                           // clear out the input field
	localStorage.setItems("myLeads" , JSON.stringify(myLeads))
	render(myLeads)
	})
	                   //console.log( localStorage.getItem("myLeads"))*/
					   
					   
					   
					   
					   
/*let myLeads = []
let oldLeads = []
const inputEl =  document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =  document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs =[
    {url : "https://wa.me/+916204630643"}
    ]
    
    tabBtn.addEventListener("click",function() {
   // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

  //     })
    
    myLeads.push(tabs[0].url)
    localStorage.getItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)

    })

function render(leads){
let listItems =""
for(let i=0; i< leads.length; i++){
	
	 listItems += `
	                 <li>
	                     <a target='_blank' href='${leads[i]}'>
					        ${myLeads[i]}
					     </a>
					 </li> ` 
	   }
	ulEl.innerHTML=listItems
}

    deleteBtn.addEventListener("dblclick", function() {
      localStorage.clear()
      myLeads = []
	  render(myLeads)
	
   })


    inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value)
	inputEl.value = ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
	render(myLeads)
	})*/
	
	
let myLeads = []
let oldLeads = []
const inputEl =  document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =  document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


    tabBtn.addEventListener("click",function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.getItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)

        })
        
    })
    
   

function render(leads){
let listItems =""
for(let i=0; i< leads.length; i++){
	
	 listItems += `
	                 <li>
	                     <a target='_blank' href='${leads[i]}'>
					        ${myLeads[i]}
					     </a>
					 </li> ` 
	   }
	ulEl.innerHTML=listItems
}

    deleteBtn.addEventListener("dblclick", function() {
      localStorage.clear()
      myLeads = []
	  render(myLeads)
	
   })


    inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value)
	inputEl.value = ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
	render(myLeads)
	})
    
    


    
    


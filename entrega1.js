
let totalServices = 0; 

function showServices(){
    const userChoice = prompt('Below, you will find the services we offer. Please enter the number of the service you want to add.\n\n1. Venue  2. Catering\n3. Decoration  4. Photography/Videography\n5. Wedding attire  6. Entertainment\n7. Invitations and stationery  8. Accommodation (if needed)\n9. Wedding cake  10. Hair and makeup')

    switch (userChoice){
        case '1':
            venueService();
            break;
        case '2':
            cateringService();
            break;
        case '3':
            decorationService();
            break;
        case '4':
            photovideoService();
            break;
        case '5':
            weddingAttireService();
            break;
        case '6':
            entertainmentService();
            break;
        case '7':
            invitationsService();
            break;
        case '8':
            accommodationService();
            break;
        case '9':
            weddingCakeService();
            break;
        case '10':
            hairAndMakeupService();
            break;      
        default:
            alert('Error, there is no selection. Please try again.')
            showServices();
    }
}

//VENUE SERVICE

function venueService(){

let venueOptionOne = 7500
let venueOptionTwo = 4500

let venue = prompt('VENUE\nIf you want to add the Venue service, please choose between the options 1 or 2.\n1. Secret luxury location outside the city: USD7,500\n2. 5-star hotel within the city: USD4,500\nIf you do not want to add this service, please press N');

    if (venue == '1'){
        alert('You have chosen: Secret luxury location outside the city\nUSD '+venueOptionOne);
        totalServices += venueOptionOne;        
    } else if (venue =='2'){
        alert('You have chosen: 5-star hotel within the city\nUSD '+venueOptionTwo);
        totalServices += venueOptionTwo;
    } else if (venue.toUpperCase() != 'N'){
        alert('Invalid answer');
        venueService();
    }
}

//CATERING SERVICE

function cateringService(){

let cateringOptionOne = 20000
let cateringOptionTwo = 15000

let catering = prompt('CATERING\nIf you want to add the Catering service, please choose between the options 1 or 2.\n1. Premium selection: USD20,000\n2. Standard option: USD15,000\nIf you do not want to add this service, please press N');

    if (catering == '1'){
        alert('You have chosen: Premium selection\nUSD '+cateringOptionOne);
        totalServices += cateringOptionOne;
    } else if (catering =='2'){
        alert('You have chosen: Standard selection\nUSD '+cateringOptionTwo);
        totalServices += cateringOptionTwo;
    } else if (catering.toUpperCase() != 'N'){
        alert('Invalid answer');
        cateringService();
    }
}

//DECORATION SERVICE

function decorationService(){

let decorationOptionOne = 10000
let decorationOptionTwo = 8000

let decoration = prompt('DECORATION\nIf you want to add the Decoration service, please choose between the options 1 or 2.\n1. Exclusive High-End Decor: USD10,000\n2. Traditional Decor: USD8,000\nIf you do not want to add this service, please press N');


    if (decoration == '1'){
        alert('You have chosen: Exclusive High-End Decor\nUSD '+decorationOptionOne);
        totalServices += decorationOptionOne;        
    } else if (decoration =='2'){
        alert('You have chosen: Traditional Decor\nUSD '+decorationOptionTwo);
        totalServices += decorationOptionTwo;        
    } else if (decoration.toUpperCase() != 'N'){
        alert('Invalid answer');
        decorationService();
    }
}

//PHOTOGRAPHY & VIDEOGRAPHY

function photovideoService(){

let photovideoOptionOne = 5000
let photovideoOptionTwo = 4000

let photovideo = prompt('PHOGRAPHY & VIDEOGRAPHY\nIf you want to add the Phography & Videography service, please choose between the options 1 or 2.\n1. Artistic Masterpieces: USD5,000\n2. Classic captures: USD4,000\nIf you do not want to add this service, please press N');

    if (photovideo == '1'){
        alert('You have chosen: Artistic Masterpieces\nUSD '+photovideoOptionOne);
        totalServices += photovideoOptionOne;       
    } else if (photovideo =='2'){
        alert('You have chosen: Classic captures\nUSD '+photovideoOptionTwo);
        totalServices += photovideoOptionTwo;        
    }else if (photovideo.toUpperCase() != 'N'){
        alert('Invalid answer');
        photovideoService();
    }   
}

//WEDDING ATTIRE

function weddingAttireService(){

    let weddingAttireOptionOne = 10000
    let weddingAttireOptionTwo = 7000
    
    let weddingAttire = prompt('WEDDING ATTIRE\nIf you want to add the Wedding Attire service, please choose between the options 1 or 2.\n1. Couture Elegance: USD10,000\n2. Sophisticated Charm: USD7,000\nIf you do not want to add this service, please press N');
    
        if (weddingAttire == '1'){
            alert('You have chosen: Couture Elegance\nUSD '+weddingAttireOptionOne);
            totalServices += weddingAttireOptionOne;
            
        } else if (weddingAttire =='2'){
            alert('You have chosen: Sophisticated Charm\nUSD '+weddingAttireOptionTwo);
            totalServices += weddingAttireOptionTwo;
            
        }else if (weddingAttire.toUpperCase() != 'N'){
            alert('Invalid answer');
            weddingAttireService();
        }   
}   

//ENTERTAINMENT

function entertainmentService(){

    let entertainmentOptionOne = 10000
    let entertainmentOptionTwo = 7000
    
    let entertainment = prompt('ENTERTAINMENT\nIf you want to add the Entertainment service, please choose between the options 1 or 2.\n1. Luxury Entertainment Showcase: USD15,000\n2. Classic Performances: USD10,000\nIf you do not want to add this service, please press N');
    
        if (entertainment == '1'){
            alert('You have chosen: Luxury Entertainment Showcase\nUSD '+entertainmentOptionOne);
            totalServices += entertainmentOptionOne;            
        } else if (entertainment =='2'){
            alert('You have chosen: Classic Performances\nUSD '+entertainmentOptionTwo);
            totalServices += entertainmentOptionTwo;            
        }else if (entertainment.toUpperCase() != 'N'){
            alert('Invalid answer');
            entertainmentService();
        }   
}

//INVITATIONS & STATIONERY

function invitationsService(){

    let invitationsOptionOne = 3000
    let invitationsOptionTwo = 2000
    
    let invitations = prompt('INVITATIONS & STATIONERY\nIf you want to add the Invitations & Stationery service, please choose between the options 1 or 2.\n1. Opulent Designs: USD3,000\n2. Traditional Invitations and Stationery: USD2,000\nIf you do not want to add this service, please press N');    

        if (invitations == '1'){
            alert('You have chosen: Opulent Designs\nUSD '+invitationsOptionOne);
            totalServices += invitationsOptionOne;            
        } else if (invitations =='2'){
            alert('You have chosen: Traditional Invitations and Stationery\nUSD '+invitationsOptionTwo);
            totalServices += invitationsOptionTwo;            
        }else if (invitations.toUpperCase() != 'N'){
            alert('Invalid answer');
            invitationsService();
        }   
}  

//ACCOMODATION

function accommodationService(){

    let accomodationOptionOne = 15000
    let accomodationOptionTwo = 11000
    
    let accomodation = prompt('ACCOMODATION\nIf you want to add the Accomodation service, please choose between the options 1 or 2.\n1. 5-star hotel: USD15,000\n2. 4-star hotel: USD11,000\nIf you do not want to add this service, please press N');    

        if (accomodation == '1'){
            alert('You have chosen: 5-star hotel\nUSD '+accomodationOptionOne);
            totalServices += accomodationOptionOne;            
        } else if (accomodation =='2'){
            alert('You have chosen: 4-star hotel\nUSD '+accomodationOptionTwo);
            totalServices += accomodationOptionTwo;            
        }else if (accomodation.toUpperCase() != 'N'){
            alert('Invalid answer');
            accommodationService();
        }   
} 

//WEDDING CAKE

function weddingCakeService(){

    let weddingCakeOptionOne = 5000
    let weddingCakeOptionTwo = 2000
    
    let weddingCake = prompt('WEDDING CAKE\nIf you want to add the Wedding Cake service, please choose between the options 1 or 2.\n1. Sylvia Weinstock Cakes: USD5,000\n2. Local baker cake: USD11,000\nIf you do not want to add this service, please press N');    

        if (weddingCake == '1'){
            alert('You have chosen: Sylvia Weinstock Cakes\nUSD '+weddingCakeOptionOne);
            totalServices += weddingCakeOptionOne;            
        } else if (weddingCake =='2'){
            alert('You have chosen: Local baker cake\nUSD '+weddingCakeOptionTwo);
            totalServices += weddingCakeOptionTwo;            
        }else if (weddingCake.toUpperCase() != 'N'){
            alert('Invalid answer');
            weddingCakeService();
        }   
}   

//HAIR & MAKEUP

function hairAndMakeupService(){

    let hairAndMakeupOptionOne = 7500
    let hairAndMakeupOptionTwo = 2000
    
    let hairAndMakeup = prompt('HAIR & MAKEUP\nIf you want to add the Hair & Makeup service, please choose between the options 1 or 2.\n1. Makeup by Patrick Ta and Hair by Guido Palau: USD7,500\n2. Makeup and Hair by local make-up artist and hairstylist: USD2,000\nIf you do not want to add this service, please press N');
    
        if (hairAndMakeup == '1'){
            alert('You have chosen: Makeup by Patrick Ta and Hair by Guido Palau\nUSD '+hairAndMakeupOptionOne);
            totalServices += hairAndMakeupOptionOne;            
        } else if (hairAndMakeup =='2'){
            alert('You have chosen: Makeup and Hair by local makeup artist and hairstylist\nUSD '+hairAndMakeupOptionTwo);
            totalServices += hairAndMakeupOptionTwo;            
        }else if (hairAndMakeup.toUpperCase() != 'N'){
            alert('Invalid answer');
            hairAndMakeupService();
        }   
}

alert('Welcome to Love & Love events.\nWe plan the wedding of your dreams.');

let  userChoice = prompt('Do you want to hire a service? Press 1 for YES and 2 for NO');

while(userChoice == "1") {
    showServices();
    userChoice = prompt("Do you want to hire more services? 1. Yes 2. No");
}

alert('Thank you for choosing Love & Love events. The total cost of the selected services is: USD'+totalServices);


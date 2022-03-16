function calci(){
    var amount = document.getElementById("amt").value;
    var original_amount = document.getElementById("oriAmt").value = amount;

    var periodNum = document.getElementById ("prd").value;
    var period = document.getElementById ("days").value;
    var interest_amount = document.getElementById ("inAmt").value;  

    var rate_of_interest = document.getElementById ("roi").value;

    if (period == "YEARS"){
        interest_amount = 365*periodNum*rate_of_interest;
    }
    else if(period == "MONTHS"){
        interest_amount = 30*periodNum*rate_of_interest;
    }
    else if(period == "WEEKS"){
        interest_amount = 7*periodNum*rate_of_interest;
    }
    else{
        interest_amount = 1*periodNum*rate_of_interest;
    }
}



//"I pledge my honor that I have abided by the Stevens honor system"- igomez1 Ian Gomez 10428821
(function($){
    let sieve = function (n){
        if(n < 1){
            return false;
        }
        let is_prime = new Array(n+1);
        for(let i = 0; i <= n; ++i){
            is_prime[i] = (i > 1);
        }
        let sqrtn = Math.sqrt(n);
        for(let i = 0; i <= sqrtn; ++i){
            if(is_prime[i]){
                for(let j = i*i; j <= n; j+=i){
                    is_prime[j] = false;
                }
            }
        }
        return is_prime[n];
    }
    $("#numberInputForm").submit(function(event){
        let insertedNumber = $("#number").val();
        if(insertedNumber == ""){
            if($("#numberInputForm .error").length == 0){
                $("#numberInputForm").append("<p class='error'> You have not inserted a number </p>");
            }
            event.preventDefault();
            return;
        }
        let attemptsList = $("#attempts");
        let insertedNumberTag = $("<li></li>");
        let is_num_prime = sieve(insertedNumber)
        let insertedNumbersClass = (is_num_prime) ? "is-prime" : "not-prime"; 
        insertedNumberTag.addClass(insertedNumbersClass);
        insertedNumberTag.html(insertedNumber + ((is_num_prime) ? " is a prime number" : " is not a prime number"));
        attemptsList.append(insertedNumberTag);
        if($("#numberInputForm .error") != undefined){
            $("#numberInputForm .error").remove();
        }
        event.preventDefault();
    });
})(jQuery);

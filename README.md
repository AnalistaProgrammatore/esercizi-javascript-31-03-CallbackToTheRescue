# EserciziJavascript 3103

## ESERCIZI
1. **Defer** aggiungi al prototype di `Function` nel file `defer.js` (quindi aggiungi a tutte le funzioni) il metodo `defer` così definito:
  - il metodo `defer(ms)` prende in input un numero e ritarda l'esecuzione della funzione a cui si applica il metodo di `ms` millisecondi
  - Per poter svolgere l'esercizio va prima studiata la funzione `setTimeout`
    - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

2. Riscrivi la funzione come classe nel file `clock.js`
  . Per poter svolgere l'esercizio vanno prima studiate:
    - La classe built-in `Date` per la gestione delle date e del tempo in js https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    - Le funzioni `setInterval` e `clearInterval`
      - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
      - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
     
3. Scrivi nel file `extended-clock.js` la classe `ExtendendClock` che estende `Clock` aggiungendo un parametro `precision` che rappresenta il numero di ms fra un "tick" dell'orologio e un altro. Il parametro `precision` dovrebbe essere un "named parameter" e avere valore di default 1000ms (1 sec)



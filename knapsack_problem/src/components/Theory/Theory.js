import React, { Component } from "react";
import MathJax from 'react-mathjax2';
import xj from '../../assets/images/xj.png';
import probplec from '../../assets/images/probplec.png';
import bellman from '../../assets/images/bellman.png';
import d from '../../assets/images/d.png';
import ej from '../../assets/images/ej.png';
import sort from '../../assets/images/sort.png';
import sumwj from '../../assets/images/sumwj.png';

class Theory extends Component{

  render() {
    return (
      <div style={{backgroundColor: 'white',height: "100%", width:"80%", marginLeft:"auto", marginRight:"auto", padding: "50px", overflow: 'auto'}}>
        <h2>Problem plecakowy</h2>
        <p>
        Problem plecakowy może być potraktowany jako jeden z problemów decyzyjnych gdzie wynikiem jest wektor zmiennych binarnych. Zakładając, że wektor &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'x_j (j=1,...,n)'}</MathJax.Node>  
        </MathJax.Context>
        &nbsp; gdzie &nbsp; 
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{' n '}</MathJax.Node>  
        </MathJax.Context> &nbsp;
         jest numerem obiektu, będzie przechowywał rozwiązania dla konkretnych decyzji według zależności:
        </p>
        <div style={{height: "100px", width:"350px", marginLeft:"auto", marginRight:"auto"}}>
          <img src={xj} width="100%" height="100%"></img>
        </div>
        <p>
        a następnie wprowadzając wagę &nbsp; 
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'w_j'}</MathJax.Node>  
        </MathJax.Context>
        &nbsp;i zysk &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'p_j'}</MathJax.Node>  
        </MathJax.Context>
        &nbsp; dla każdego obiektu oraz pojemność plecaka &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'c'}</MathJax.Node>  
        </MathJax.Context>
        &nbsp; możemy przedstawić matematyczny zapis problemu plecakowego znanego jako 0-1 Knapsack Problem:
        </p>
        <div style={{height: "200px", width:"350px", marginLeft:"auto", marginRight:"auto"}}>
          <img src={probplec} width="100%" height="100%"></img>
        </div>
        
        <p>
        Podsumowując, problem plecakowy polega na zmaksymalizowaniu wartości plecaka tak aby waga wybranych przedmiotów nie przekroczyła jego pojemności.
        </p>
        <p>
        Opisywane zagadnienie w celu jego zrozumienia jest często przedstawione przy pomocy złodzieja rabującego sklep. Przestępca stoi przed problemem wyboru przedmiotów.  Zna wartość każdego z asortymentów oraz jego wagę. Jednak ze względu na to, że jego torba ma ograniczoną pojemność nie może zabrać wszystkiego. Musi podjąć decyzję dotyczącą wyboru przedmiotów tak aby jego zysk z kradzieży był jak największy. Znając zagadnienie problemu plecakowego mógłby przeprowadzić rabunek w taki sposób aby jego łup był jak najbardziej opłacalny dla niego. Inny przykładem obrazującym opisywane zagadnienie jest problem postawiony przed inwestorem. Przedsiębiorca chcąc zmaksymalizować przychód musi podjąć decyzje, w które akcje warto zainwestować. Długoterminowe zyski oraz koszt każdego wkładu jest znany. Pomijając wszystkie kwestie dotyczące ryzyka, zagadnienie problemu plecakowego może zostać użyte do opisu zysków inwestora. Podobnych przykładów można przedstawiać wiele natomiast przedstawione zagadnienie jest realnym problemem, który jest wykorzystywany w wielu dziedzinach życia takich jak: przemysł, transport lub administracja. Ze względu na to, że struktura problemu plecakowego nie jest skomplikowana, zagadnienie służy do rozwiązywana podproblemów w bardziej złożonych problemach optymalizacyjnych.
        </p>
        <p>
        Problem plecakowy to jedno z najważniejszych zagadnień optymalizacyjnych. Jest dokładnie badane od dziesiątek lat. Na przestrzeni ostatnich dekad powstało wiele badań opisujących KP (ang. Knapsack Problem) oraz stworzono szereg algorytmów mogących rozwiązywać złożone problemy składające się z wielu danych wejściowych. Analiza Skiena pokazała ogromne zainteresowanie wśród algorytmów z plecakiem oraz udowodniła że są one na trzecim miejscu najbardziej potrzebnych implementacji.
        </p>
        <h2>Programowanie dynamiczne</h2>
        <p>
        Jest to jedna z dostępnych metod, która może być stosowana gdy rozwiązanie optymalne jest złożone z optymalnych rozwiązań podproblemów. Jej działanie może być opisane za pomocą rekurencji Bellmana gdzie:
        </p>

        <div style={{height: "120px", width:"410px", marginLeft:"auto", marginRight:"auto"}}>
          <img src={bellman} width="100%" height="100%"></img>
        </div>

        <p>
        Przypadek gdzie pojemność plecaka &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'w_j'}</MathJax.Node>  
        </MathJax.Context>
        &nbsp; opisuje sytuację, w której element j przekracza dopuszczalną wagę. Wtedy rozwiązanie optymalne &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'z_{j-1}(d)'}</MathJax.Node>  
        </MathJax.Context>
         &nbsp; nie zmienia wartości. Gdy element można zapakować do plecaka, czyli gdy &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'d > w_j'}</MathJax.Node>  
        </MathJax.Context>
          , mamy dwie możliwości. Element jest dodawany do plecaka zwiększając wartość rozwiązania lub nie jest brany pod uwagę, a poprzednia wartość&nbsp;
           <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'z_{j-1}(d)'}</MathJax.Node>  
        </MathJax.Context> 
           &nbsp;pozostaje niezmieniona. Obliczenie wszystkich wartości&nbsp;
            <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'z_j(d)'}</MathJax.Node>  
        </MathJax.Context> 
            &nbsp; stosując wspomnianą wyżej rekurencję dla&nbsp;
             <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'j=1...n'}</MathJax.Node>  
        </MathJax.Context> 
             , na koniec daje optymalną wartość problemu plecakowego. Ze względu na to, że wartości&nbsp;
              <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'z_j(d)'}</MathJax.Node>  
        </MathJax.Context> 
              &nbsp;są postrzegane jako wartości funkcji pojemności przedstawione rozwiązanie jest nazywane również "programowaniem dynamicznym przez wagi". Jedną z wad programowania dynamicznego jest duże zapotrzebowanie na pamięć . Istnieją metody aby je zmniejszyć natomiast wiąże się to z wydłużeniem pracy algorytmu.
        </p>
        <h2>Algorytm aproksymacyjny</h2>
        <p>
        Kolejną wykorzystaną w projekcie metodą rozwiązującą problem plecakowy jest zaproponowany przez Sahni'ego w 1975 roku zachłanny algorytm aproksymacyjny. Zachłanność w tym przypadku oznacza sposób wybierania rozwiązania podproblemu: algorytm wybiera aktualnie najlepsze rozwiązanie nie analizując kolejnych kroków. Takie zachowanie sprawia, że wynik tej metody jest heurystyczny. Rozwiązanie zwrócone przez taki algorytm nie zapewnia jego optymalności. Może być jedynie blisko prawidłowego. Opisywana metoda nazywana jest również wielomianowym schematem aproksymacji. Gwarantuje to, że czas trwania algorytmu jest wielomianowy dla wszystkich przekazanych dokładności oraz można go opisać za pomocą funkcji wykładniczej. 
        </p>
        <p>
        Model Sahni'ego korzysta z współczynnika:
        </p>

        <div style={{height: "70px", width:"120px", marginLeft:"auto", marginRight:"auto"}}>
          <img src={ej} width="100%" height="100%"></img>
        </div>

        <p>
        Wartości współczynników obliczane są dla wszystkich elementów danego problemu, a następnie sortowane są w kolejności malejącej tak aby:
        </p>

        <div style={{height: "80px", width:"260px", marginLeft:"auto", marginRight:"auto"}}>
          <img src={sort} width="100%" height="100%"></img>
        </div>

        <p>
        Ostatnim krokiem jest zapełnianie plecaka przedmiotami począwszy od tych z największymi wartościami &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'e_j'}</MathJax.Node>  
        </MathJax.Context>
        &nbsp; dopóki sumaryczna waga elementów nie przekroczy maksymalnej pojemności plecaka &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'c'}</MathJax.Node>  
        </MathJax.Context>
        :
        </p>

        <div style={{height: "80px", width:"160px", marginLeft:"auto", marginRight:"auto"}}>
          <img src={sumwj} width="100%" height="100%"></img>
        </div>

        <p>
        Sumaryczna wartość zapakowanych przy pomocy algorytmu aproksymacyjnego przedmiotów &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'d^*'}</MathJax.Node>  
        </MathJax.Context>
        &nbsp; jest za każdym razem nie mniejsza niż połowa wartości optymalnie zapełnionego plecaka &nbsp;
        <MathJax.Context input='tex'>  
                <MathJax.Node inline>{'k'}</MathJax.Node>  
        </MathJax.Context>
        :
        </p>

        <div style={{height: "70px", width:"110px", marginLeft:"auto", marginRight:"auto"}}>
          <img src={d} width="100%" height="100%"></img>
        </div>

      </div>
    );
  }
}

  

export default Theory;

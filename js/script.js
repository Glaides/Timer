    /*
        Se o navegador não da suporte para o recurso de tema ele não exibira o botão para alterar o tema.
    */
    let toggle = document.getElementById('btn-tema');
    toggle.style.display = (window.matchMedia('(prefers-color-scheme)').media !== 'not all') ? 'inline' : 'none';

    /*
        Grava as configurações do som padrão
    */

    if(localStorage.getItem('somTimer') == null || localStorage.getItem('somTimer') == undefined) {
        const som = { 
            frequencia: document.getElementById('fIn').value, 
            tipo: document.getElementById('tIn').value, 
            volume: document.getElementById('vIn').value, 
            tempo: document.getElementById('dIn').value 
        };  
        localStorage.setItem('somTimer', JSON.stringify(som));
    }else{
        let som = JSON.parse(localStorage.getItem('somTimer'));
        document.getElementById('fIn').value = som.frequencia;
        document.getElementById('tIn').value = som.tipo;
        document.getElementById('vIn').value = som.volume;
        document.getElementById('dIn').value = som.tempo; 
    }
    
    const onChange = () => {
        let som = JSON.parse(localStorage.getItem('somTimer'));
        som.frequencia = Number(document.getElementById('fIn').value);
        som.tipo = document.getElementById('tIn').value;
        som.volume =Number(document.getElementById('vIn').value);
        som.tempo = Number(document.getElementById('dIn').value);
        localStorage.setItem('somTimer', JSON.stringify(som));
    }
    
function insertionSort(arr) {
    // Compteur pour le nombre d'itérations
    let i, j;
    
    // Parcourir chaque élément du tableau à partir du deuxième
    for (i = 1; i < arr.length; i++) {
        // L'élément à insérer
        let key = arr[i];
        // Initialiser j comme l'indice de l'élément précédent
        j = i - 1;

        // Déplacer les éléments de arr[0..i-1] qui sont plus grands que key
        // vers une position en avant de leur position actuelle
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // Insérer key à sa position correcte
        arr[j + 1] = key;
    }
    
    return arr;
}

// Exemple d'utilisation
let tableau = [12, 11, 13, 5, 6];
console.log("Tableau trié :", insertionSort(tableau));

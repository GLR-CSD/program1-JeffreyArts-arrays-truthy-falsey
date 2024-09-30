
        // Function to generate and display the arrays in HTML
        function displayArrays(arrays) {
            const container = document.getElementById('array-container');

            arrays.forEach((array, index) => {
                // Create <pre> tag to display the array structure
                const pre = document.createElement('pre');
                const h2 = document.createElement('h2');
                h2.innerText = `Array ${index}` 
                if (Array.isArray(array[0])) {
                    // 2D array formatting
                    pre.textContent = '[\r\n' + array.map(row => '[' + row.join(', ') + ']').join('\n') + '\r\n]';
                } else {
                    // 1D array formatting
                    pre.textContent = '[' + array.join(', ') + ']';
                }
                
                container.appendChild(h2);
                container.appendChild(pre);

                // Create <figure> for the visual grid representation
                const figure = document.createElement('figure');
                figure.style.display = 'grid';
                figure.style.gridTemplateColumns = `repeat(${array[0].length || array.length}, 20px)`; // Dynamically set grid columns

                // Loop through the array to generate spans
                array.flat().forEach(value => {
                    const span = document.createElement('span');
                    span.innerText = "■"
                    span.classList.add("square")
                    if (value) {
                        span.classList.add("__isTrue")
                    } else {
                        span.classList.add("__isFalse")
                    }
                    // span.style.width = '20px';
                    // span.style.height = '20px';
                    // span.style.display = 'inline-block';
                    // span.style.backgroundColor = value ? 'black' : 'white';
                    // span.style.border = '1px solid #000';
                    figure.appendChild(span);
                });

                container.appendChild(figure);
                const line = document.createElement('hr');
                container.appendChild(line);
            });
            
        }

        // Call the function to render the arrays
        displayArrays(arrays);
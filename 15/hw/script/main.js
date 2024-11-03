import { userData, filmData, drawRectangles, drawSvgLine } from "./async-canvas.js";
import { stringFunction } from "./stringUtilities.js";
import { fetchTrendingMovies, fetchMovieDetails } from "./apiService.js";


userData(2);
filmData(3);
drawRectangles();

stringFunction('Lorem ipsum dolor sit amet consectetur adipisicing elit.');

drawSvgLine(170, 150, 150, 250, 'yellow', 3);

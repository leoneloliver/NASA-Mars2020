# NASA-Mars2020

Challenge

A squad of 4 robotic rovers are to be landed by NASA on a plateau on Mars.

Their engineers need an interface that gives them the ability to land rovers in pre-specified coordinates, control their movements across the plateau, and visualize their current position on a map. 


A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters using interface controls. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.

'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

Input:
Configuration Input: The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
Per Rover.Test Input:8 4

Input 1: Landing co-ordinates for the Rover The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation. Test Input:1 2 N

Input 2: Navigation instructions i.e a string containing ('L', 'R', 'M'). Test Input:LMLMLMLMM


Assumptions:
-NASA has a total of 4 rovers available in orbit for this mission. 
-If a rover is driven off the plateau it is destroyed and unusable.
-Rovers can occupy the same position on the plateau. 

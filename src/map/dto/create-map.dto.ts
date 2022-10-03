
import {Geometry } from 'geojson'


export class CreateMapDto {
   
    id: number;
    Name: string;
    description:string;
    color:string; 
    
    geom:Geometry ;

}


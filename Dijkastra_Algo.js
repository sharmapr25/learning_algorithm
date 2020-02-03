class Distance {
    _distance;
    _source;

    constructor(distance, source) {
        this._distance = distance;
        this._source = source;
    }

    addDistance(distanceToAdd){
        return this._distance + distanceToAdd;
    }

    isGreaterThan(distanceToCheck){
        return this._distance > distanceToCheck;
    }
}

class Vertex {
    _vertexName;

    constructor(vertexName) {
        this._vertexName = vertexName;
        this._distanceFromStart = new Distance(Infinity, null);
        this._isVisited = false;
    }

    setDistanceFromStart(distance) {
        this._distanceFromStart = distance;
    }

    isDistanceGreaterThan(givenDistance){
        return this._distanceFromStart.isGreaterThan(givenDistance);
    }

    setIsVisited() {
        this._isVisited = true;
    }


    getDistanceWith(distanceToAdd) {
        return this._distanceFromStart.addDistance(distanceToAdd);
    }

}

class Edge {
    _source;
    _destination;
    _distance;

    constructor(source, destination, distance) {
        this._source = source;
        this._destination = destination;
        this._distance = distance;
    }

    isSameSource(vertex) {
        return this._source === vertex;
    }

    setDestinationDistance() {
        let distance = this._source.getDistanceWith(this._distance);
        if(this._destination.isDistanceGreaterThan(distance)){
            this._destination.setDistanceFromStart(new Distance(distance, this._source));
        }
    }
}

class Dijkastra_Algorithm {
    _vertices;
    _edges;

    constructor(vertices, edges) {
        this._vertices = vertices;
        this._edges = edges;

    }

    addDistanceFromStartToEachVertices() {
        let startVertex = this._vertices[0];
        if (startVertex == null) {
            return;
        }
        startVertex.setDistanceFromStart(new Distance(0, null));
        let edges = this._edges;
        this._vertices.forEach(currentVertex => {
            let neighbourVerticesEdge = edges.filter(edge => edge.isSameSource(currentVertex));
            if (neighbourVerticesEdge.length > 0) {
                neighbourVerticesEdge.forEach(edge => edge.setDestinationDistance())
            }
        })
    }
}

// let vertexA = new Vertex("A");
// let vertexB = new Vertex("B");
// let vertexC = new Vertex("C");
// let vertexD = new Vertex("D");
// let vertexE = new Vertex("E");
// let vertexF = new Vertex("F");
// let vertices = [vertexA, vertexB, vertexC, vertexD, vertexE, vertexF];
//
// let edgeAToB = new Edge(vertices[0], vertices[1], 4);
// let edgeAToC = new Edge(vertexA, vertexC, 4);
// let edgeBToD = new Edge(vertexB, vertexD, 3);
// let edgeBToF = new Edge(vertexB, vertexF, 6);
// let edgeBToE = new Edge(vertexB, vertexE, 1);
// let edgeDToF = new Edge(vertexD, vertexF, 1);
// let edgeEToF = new Edge(vertexE, vertexF, 3);
//
// let edges = [edgeAToB, edgeAToC, edgeBToD, edgeBToF, edgeBToE, edgeDToF, edgeEToF];

let vertexA = new Vertex("A");
let vertexB = new Vertex("B");
let vertexC = new Vertex("C");
let vertexD = new Vertex("D");
let vertexE = new Vertex("E");
let vertexF = new Vertex("F");
let vertexG = new Vertex("G");
let vertices = [vertexA, vertexB, vertexC, vertexD, vertexE, vertexF, vertexG];

let edgeAToB = new Edge(vertexA, vertexB, 4);
let edgeAToC = new Edge(vertexA, vertexC, 1);
let edgeBToD = new Edge(vertexB, vertexD, 3);
let edgeCToD = new Edge(vertexC, vertexD, 2);
let edgeCToF = new Edge(vertexC, vertexF, 6);
let edgeBToE = new Edge(vertexB, vertexE, 8);
let edgeDToE = new Edge(vertexD, vertexE, 4);
let edgeEToG = new Edge(vertexE, vertexG, 2);
let edgeFToG = new Edge(vertexF, vertexG, 8);


let edges = [edgeAToB, edgeAToC, edgeBToD, edgeBToE,edgeCToD,edgeCToF, edgeDToE,edgeEToG,edgeFToG];

let dijkastraAlgorithm = new Dijkastra_Algorithm(vertices, edges);
dijkastraAlgorithm.addDistanceFromStartToEachVertices();

vertices.forEach(vertex => console.log(JSON.stringify(vertex)));

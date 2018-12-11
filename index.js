// Type definitions for BaiduMap v2.0
// Project: http://lbsyun.baidu.com/index.php?title=jspopular
// Definitions by: Codemonk <http://www.youxianxueche.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
Copyright [Codemonk] [Codemonk@live.cn]

This project is licensed under the MIT license.
Copyrights are respective of each contributor listed at the beginning of each definition file.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

declare namespace BMap {
    class Map {
        constructor(container: string | HTMLElement, opts?: MapOptions)
        enableDragging(): void
        disableDragging(): void
        enableScrollWheelZoom(): void
        disableScrollWheelZoom(): void
        enableDoubleClickZoom(): void
        disableDoubleClickZoom(): void
        enableKeyboard(): void
        disableKeyboard(): void
        enableInertialDragging(): void
        disableInertialDragging(): void
        enableContinuousZoom(): void
        disableContinuousZoom(): void
        enablePinchToZoom(): void
        disablePinchToZoom(): void
        enableAutoResize(): void
        disableAutoResize(): void
        setDefaultCursor(cursor: string): void
        getDefaultCursor(): string
        setDraggingCursor(cursor: string): void
        getDraggingCursor(): string
        setMinZoom(zoom: number): void
        setMaxZoom(zoom: number): void
        setMapStyle(mapStyle: MapStyle): void
        setPanorama(pano: Panorama): void
        disable3DBuilding(): void
        getBounds(): Bounds
        getCenter(): Point
        getDistance(start: Point, end: Point): number
        getMapType(): MapType
        getSize(): Size
        getViewport(view: Point[], viewportOptions?: ViewportOptions): Viewport
        getZoom(): number
        getPanorama(): Panorama
        centerAndZoom(center: Point, zoom: number): void
        centerAndZoom(city: string): void
        panTo(center: Point, opts?: PanOptions): void
        panBy(x: number, y: number, opts?: PanOptions): void
        reset(): void
        setCenter(center: Point | string): void
        setCurrentCity(city: string): void
        setMapType(mapType: MapType): void
        setViewport(view: Point[], viewportOptions?: ViewportOptions): void
        setZoom(zoom: number): void
        highResolutionEnabled(): boolean
        zoomIn(): void
        zoomOut(): void
        addHotspot(hotspot: Hotspot): void
        removeHotspot(hotspot: Hotspot): void
        clearHotspots(): void
        addControl(control: Control): void
        removeControl(control: Control): void
        getContainer(): HTMLElement
        addContextMenu(menu: ContextMenu): void
        removeContextMenu(menu: ContextMenu): void
        addOverlay(overlay: Overlay): void
        removeOverlay(overlay: Overlay): void
        clearOverlays(): void
        openInfoWindow(infoWnd: InfoWindow, point: Point): void
        closeInfoWindow(): void
        pointToOverlayPixel(point: Point): Pixel
        overlayPixelToPoint(pixel: Pixel): Point
        getInfoWindow(): InfoWindow
        getOverlays(): Overlay[]
        getPanes(): MapPanes
        addTileLayer(tileLayer: TileLayer): void
        removeTileLayer(tilelayer: TileLayer): void
        getTileLayer(mapType: string): TileLayer
        pixelToPoint(pixel: Pixel): Point
        pointToPixel(point: Point): Pixel
        onclick: (event: { type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }) => void
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onrightclick: (event: { type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }) => void
        onrightdblclick: (event: { type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }) => void
        onmaptypechange: (event: { type: string, target: any }) => void
        onmousemove: (event: { type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }) => void
        onmouseover: (event: { type: string, target: any }) => void
        onmouseout: (event: { type: string, target: any }) => void
        onmovestart: (event: { type: string, target: any }) => void
        onmoving: (event: { type: string, target: any }) => void
        onmoveend: (event: { type: string, target: any }) => void
        onzoomstart: (event: { type: string, target: any }) => void
        onzoomend: (event: { type: string, target: any }) => void
        onaddoverlay: (event: { type: string, target: any }) => void
        onaddcontrol: (event: { type: string, target: any }) => void
        onremovecontrol: (event: { type: string, target: any }) => void
        onremoveoverlay: (event: { type: string, target: any }) => void
        onclearoverlays: (event: { type: string, target: any }) => void
        ondragstart: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        ondragging: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        ondragend: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onaddtilelayer: (event: { type: string, target: any }) => void
        onremovetilelayer: (event: { type: string, target: any }) => void
        onload: (event: { type: string, target: any, point: Point, pixel: Pixel, zoom: number }) => void
        onresize: (event: { type: string, target: any, size: Size }) => void
        onhotspotclick: (event: { type: string, target: any, spots: HotspotOptions }) => void
        onhotspotover: (event: { type: string, target: any, spots: HotspotOptions }) => void
        onhotspotout: (event: { type: string, target: any, spots: HotspotOptions }) => void
        ontilesloaded: (event: { type: string, target: any }) => void
        ontouchstart: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        ontouchmove: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        ontouchend: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onlongpress: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    }

    class Point {
        constructor(lng: number, lat: number)
        lng: number
        lat: number
        equals(other: Point): boolean
    }
    class Pixel {
        constructor(x: number, y: number)
        x: number
        y: number
        equals(other: Pixel): boolean
    }
    class Size {
        constructor(width: number, height: number)
        width: number
        height: number
        equals(other: Size): boolean
    }
    class Bounds {
        constructor(minX: number, minY: number, maxX: number, maxY: number)
        constructor(sw: Point, ne: Point)
        minX: number
        minY: number
        maxX: number
        maxY: number
        equals(other: Bounds): boolean
        containsPoint(point: Point): boolean
        containsBounds(bounds: Bounds): boolean
        intersects(other: Bounds): boolean
        extend(point: Point): void
        getCenter(): Point
        isEmpty(): boolean
        getSouthWest(): Point
        getNorthEast(): Point
        toSpan(): Point
    }
    class Control {
        constructor()
        defaultAnchor: ControlAnchor
        defaultOffset: Size
        initialize(map: Map): HTMLElement
        setAnchor(anchor: ControlAnchor): void
        getAnchor(): ControlAnchor
        setOffset(offset: Size): void
        getOffset(): Size
        show(): void
        hide(): void
        isVisible(): boolean
    }
    interface NavigationControlOptions {
        anchor?: ControlAnchor
        offset?: Size
        type?: NavigationControlType
        showZoomInfo?: boolean
        enableGeolocation?: boolean
    }
    interface ScaleControlOptions {
        anchor?: ControlAnchor
        offset?: Size
    }
    interface CopyrightControlOptions {
        anchor?: ControlAnchor
        offset?: Size
    }
    type ControlAnchor = number
    class OverviewMapControl extends Control {
        constructor(opts: OverviewMapControlOptions)
        changeView(): void
        setSize(size: Size): void
        getSize(): Size
        onviewchanged: (event: { type: string, target: any, isOpen: boolean }) => void
        onviewchanging: (event: { type: string, target: any }) => void
    }
    type LengthUnit = string
    class MapTypeControl extends Control {
        constructor(opts?: MapTypeControlOptions)
    }
    class NavigationControl extends Control {
        constructor(opts?: NavigationControlOptions)
        getType(): NavigationControlOptions
        setType(type: NavigationControlType): void
    }
    interface OverviewMapControlOptions {
        anchor?: ControlAnchor
        offset?: Size
        size?: Size
        isOpen?: boolean
    }
    class CopyrightControl extends Control {
        constructor(opts?: CopyrightControlOptions)
        addCopyright(copyright: Copyright): void
        removeCopyright(id: number): void
        getCopyright(id: number): Copyright
        getCopyrightCollection(): Copyright[]
    }
    interface MapTypeControlOptions {
        type?: MapTypeControlType,
        mapTypes?: MapType[]
    }

    type NavigationControlType = number
    class ScaleControl extends Control {
        constructor(opts?: ScaleControlOptions)
        getUnit(): LengthUnit
        setUnit(unit: LengthUnit): void
    }
    interface Copyright {
        id?: number
        content?: string
        bounds?: Bounds
    }
    type MapTypeControlType = number
    class GeolocationControl extends Control {
        constructor(opts?: GeolocationControlOptions)
    }
    interface GeolocationControlOptions {
        anchor?: ControlAnchor
        offset?: Size
        showAddressBar?: boolean
        enableAutoLocation?: boolean
        locationIcon?: Icon
    }
    interface Icon {
        constructor(url: string, size: Size, opts?: IconOptions)
        anchor: Size
        size: Size
        imageOffset: Size
        imageSize: Size
        imageUrl: Size
        infoWindowAnchor: Size
        printImageUrl: string
        setImageUrl(imageUrl: string): void
        setSize(size: Size): void
        setImageSize(offset: Size): void
        setAnchor(anchor: Size): void
        setImageOffset(offset: Size): void
        setInfoWindowAnchor(anchor: Size): void
        setPrintImageUrl(url: string): void
    }
    type StatusCode = number
    class PanoramaControl extends Control {
        constructor()
    }

    interface PanOptions {
        noAnimation?: boolean
    }
    interface MapOptions {
        minZoom?: number
        maxZoom?: number
        mapType?: MapType
        enableHighResolution?: boolean
        enableAutoResize?: boolean
        enableMapClick?: boolean
    }
    interface Viewport {
        center: Point
        zoom: number
    }
    interface ViewportOptions {
        enableAnimation?: boolean
        margins?: number[]
        zoomFactor?: number
        delay?: number
    }
    type APIVersion = number
    interface MapStyle {
        features: any[]
        style: string
    }
    class TileLayer {
        constructor(opts?: TileLayerOptions)
        getTilesUrl(tileCoord: Pixel, zoom: number): string
        getCopyright(): Copyright
        isTransparentPng(): boolean
    }
    interface TileLayerOptions {
        transparentPng?: boolean
        tileUrlTemplate?: string
        copyright?: Copyright
        zIndex?: number
    }
    class TrafficLayer extends TileLayer {
        constructor(opts?: TrafficLayerOptions)
    }
    interface TrafficLayerOptions {
        predictDate?: PredictDate
    }
    interface PredictDate {
        weekday: number
        hour: number
    }
    class CustomLayer extends TileLayer {
        constructor(opts: CustomLayerOptions)
        onhotspotclick: (event: { type: string, target: any, content: any }) => void
    }
    interface Custompoi {
        poiId: string
        databoxId: string
        title: string
        address: string
        phoneNumber: string
        postcode: string
        provinceCode: number
        province: string
        cityCode: number
        city: string
        districtCode: number
        district: string
        point: Point
        tags: string[]
        typeId: number
        extendedData: any
    }
    class PanoramaCoverageLayer extends TileLayer {
        constructor()
    }
    interface CustomLayerOptions {
        databoxId?: string
        geotableId?: string
        q?: string
        tags?: string
        filter?: string
        pointDensityType?: PointDensityType
    }
    type PointDensityType = number
    class MapType {
        constructor(name: string, layers: TileLayer | TileLayer[], opts?: MapTypeOptions)
        getName(): string
        getTileLayer(): TileLayer
        getMinZoom(): number
        getMaxZoom(): number
        getProjection(): Projection
        getTextColor(): string
        getTips(): string
    }
    interface MapTypeOptions {
        minZoom?: number
        maxZoom?: number
        errorImageUrl?: string
        textColor?: number
        tips?: string
    }
    interface Projection {
        lngLatToPoint(lngLat: Point): Pixel
        pointToLngLat(point: Pixel): Point
    }
    interface MercatorProjection extends Projection {
    }
    interface PerspectiveProjection extends Projection {
    }
}
interface Overlay {
    initialize?(map: Map): HTMLElement
    isVisible?(): boolean
    draw?(): void
    show?(): void
    hide?(): void
}
type SymbolShapeType = number
interface PolylineOptions {
    strokeColor?: string
    strokeWeight?: number
    strokeOpacity?: number
    strokeStyle?: string
    enableMassClear?: boolean
    enableEditing?: boolean
    enableClicking?: boolean
}
interface GroundOverlayOptions {
    opacity?: number
    imageURL?: string
    displayOnMinLevel?: number
    displayOnMaxLevel?: number
}
interface Marker extends Overlay { }
class Marker {
    constructor(point: Point, opts?: MarkerOptions)
    openInfoWindow(infoWnd: InfoWindow): void
    closeInfoWindow(): void
    setIcon(icon: Icon): void
    getIcon(): Icon
    setPosition(position: Point): void
    getPosition(): Point
    setOffset(offset: Size): void
    getOffset(): Size
    setLabel(label: Label): void
    getLabel(): Label
    setTitle(title: string): void
    getTitle(): string
    setTop(isTop: boolean): void
    enableDragging(): void
    disableDragging(): void
    enableMassClear(): void
    disableMassClear(): void
    setZIndex(zIndex: number): void
    getMap(): Map
    addContextMenu(menu: ContextMenu): void
    removeContextMenu(menu: ContextMenu): void
    setAnimation(animation?: Animation): void
    setRotation(rotation: number): void
    getRotation(): number
    setShadow(shadow: Icon): void
    getShadow(): void
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    onclick: (event: { type: string, target: any }) => void
    ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onremove: (event: { type: string, target: any }) => void
    oninfowindowclose: (event: { type: string, target: any }) => void
    oninfowindowopen: (event: { type: string, target: any }) => void
    ondragstart: (event: { type: string, target: any }) => void
    ondragging: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    ondragend: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onrightclick: (event: { type: string, target: any }) => void
}
interface SymbolOptions {
    anchor?: Size
    fillColor?: string
    fillOpacity?: number
    scale?: number
    rotation?: number
    strokeColor?: string
    strokeOpacity?: number
    strokeWeight?: number
}
class IconSequence {
    constructor(symbol: Symbol, offset?: string, repeat?: string, fixedRotation?: boolean)
}
interface PointCollection extends Overlay { }
class PointCollection {
    constructor(points: Point[], opts?: PointCollectionOption)
    setPoints(points: Point[]): void
    setStyles(styles: PointCollectionOption): void
    clear(): void
    onclick: (event: { type: string, target: any, point: Point }) => void
    onmouseover: (event: { type: string, target: any, point: Point }) => void
    onmouseout: (event: { type: string, target: any, point: Point }) => void
}
interface MarkerOptions {
    offset?: Size
    icon?: Icon
    enableMassClear?: boolean
    enableDragging?: boolean
    enableClicking?: boolean
    raiseOnDrag?: boolean
    draggingCursor?: string
    rotation?: number
    shadow?: Icon
    title?: string
}
interface InfoWindow extends Overlay { }
class InfoWindow {
    constructor(content: string | HTMLElement, opts?: InfoWindowOptions)
    setWidth(width: number): void
    setHeight(height: number): void
    redraw(): void
    setTitle(title: string | HTMLElement): void
    getTitle(): string | HTMLElement
    setContent(content: string | HTMLElement): void
    getContent(): string | HTMLElement
    getPosition(): Point
    enableMaximize(): void
    disableMaximize(): void
    isOpen(): boolean
    setMaxContent(content: string): void
    maximize(): void
    restore(): void
    enableAutoPan(): void
    disableAutoPan(): void
    enableCloseOnClick(): void
    disableCloseOnClick(): void
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    onclose: (event: { type: string, target: any, point: Point }) => void
    onopen: (event: { type: string, target: any, point: Point }) => void
    onmaximize: (event: { type: string, target: any }) => void
    onrestore: (event: { type: string, target: any }) => void
    onclickclose: (event: { type: string, target: any }) => void
}
interface Polygon extends Overlay { }
class Polygon {
    constructor(points: Array<Point>, opts?: PolygonOptions)
    setPath(path: Point[]): void
    getPath(): Point[]
    setStrokeColor(color: string): void
    getStrokeColor(): string
    setFillColor(color: string): void
    getFillColor(): string
    setStrokeOpacity(opacity: number): void
    getStrokeOpacity(): number
    setFillOpacity(opacity: number): void
    getFillOpacity(): number
    setStrokeWeight(weight: number): void
    getStrokeWeight(): number
    setStrokeStyle(style: string): void
    getStrokeStyle(): string
    getBounds(): Bounds
    enableEditing(): void
    disableEditing(): void
    enableMassClear(): void
    disableMassClear(): void
    setPointAt(index: number, point: Point): void
    setPositionAt(index: number, point: Point): void
    getMap(): Map
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    onclick: (event: { type: string, target: any }) => void
    ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onremove: (event: { type: string, target: any }) => void
    onlineupdate: (event: { type: string, target: any }) => void
}
interface PointCollectionOption {
    shape?: ShapeType
    color?: string
    size?: SizeType
}
type Animation = number
interface InfoWindowOptions {
    width?: number
    height?: number
    maxWidth?: number
    offset?: Size
    title?: string
    enableAutoPan?: boolean
    enableCloseOnClick?: boolean
    enableMessage?: boolean
    message?: string
}
interface PolygonOptions {
    strokeColor?: string
    fillColor?: string
    strokeWeight?: number
    strokeOpacity?: number
    fillOpacity?: number
    strokeStyle?: number
    enableMassClear?: boolean
    enableEditing?: boolean
    enableClicking?: boolean
}
type ShapeType = number
interface Icon extends Overlay { }
class Icon {
    constructor(url: string, size: Size, opts?: IconOptions)
    anchor: Size
    size: Size
    imageOffset: Size
    imageSize: Size
    imageUrl: Size
    infoWindowAnchor: Size
    printImageUrl: string
    setImageUrl(imageUrl: string): void
    setSize(size: Size): void
    setImageSize(offset: Size): void
    setAnchor(anchor: Size): void
    setImageOffset(offset: Size): void
    setInfoWindowAnchor(anchor: Size): void
    setPrintImageUrl(url: string): void
}
interface Label extends Overlay { }
class Label {
    constructor(content: string, opts?: LabelOptions)
    setStyle(styles: Object): void
    setContent(content: string): void
    setPosition(position: Point): void
    getPosition(): Point
    setOffset(offset: Size): void
    getOffset(): Size
    setTitle(title: string): void
    getTitle(): string
    enableMassClear(): void
    disableMassClear(): void
    setZIndex(zIndex: number): void
    setPosition(position: Point): void
    getMap(): Map
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    onclick: (event: { type: string, target: any }) => void
    ondblclick: (event: { type: string, target: any }) => void
    onmousedown: (event: { type: string, target: any }) => void
    onmouseup: (event: { type: string, target: any }) => void
    onmouseout: (event: { type: string, target: any }) => void
    onmouseover: (event: { type: string, target: any }) => void
    onremove: (event: { type: string, target: any }) => void
    onrightclick: (event: { type: string, target: any }) => void
}
interface Circle extends Overlay { }
class Circle {
    constructor(center: Point, radius: number, opts?: CircleOptions)
    setCenter(center: Point): void
    getCenter(): Point
    setRadius(radius: number): void
    getRadius(): number
    getBounds(): Bounds
    setStrokeColor(color: string): void
    getStrokeColor(): string
    setFillColor(color: string): void
    getFillColor(): string
    setStrokeOpacity(opacity: number): void
    getStrokeOpacity(): number
    setFillOpacity(opacity: number): void
    getFillOpacity(): number
    setStrokeWeight(weight: number): void
    getStrokeWeight(): number
    setStrokeStyle(style: string): void
    getStrokeStyle(): string
    getBounds(): Bounds
    enableEditing(): void
    disableEditing(): void
    enableMassClear(): void
    disableMassClear(): void
    getMap(): Map
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    onclick: (event: { type: string, target: any }) => void
    ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onremove: (event: { type: string, target: any }) => void
    onlineupdate: (event: { type: string, target: any }) => void
}
type SizeType = number
interface IconOptions {
    anchor?: Size
    imageOffset?: Size
    infoWindowAnchor?: Size
    printImageUrl?: string
}
interface LabelOptions {
    offset?: Size
    position?: Point
    enableMassClear?: boolean
}
interface CircleOptions {
    strokeColor?: string
    fillColor?: string
    strokeWeight?: number
    strokeOpacity?: number
    fillOpacity?: number
    strokeStyle?: string
    enableMassClear?: boolean
    enableEditing?: boolean
    enableClicking?: boolean
}
interface Hotspot extends Overlay { }
class Hotspot {
    constructor(position: Point, opts?: HotspotOptions)
    setPosition(position: Point): void
    getPosition(): Point
    setText(text: string): void
    getText(): string
    setUserData(data: any): void
    getUserData(): any
}
interface Symbol extends Overlay { }
class Symbol {
    constructor(path: string | SymbolShapeType, opts?: SymbolOptions)
    setPath(path: string | SymbolShapeType): void
    setAnchor(anchor: Size): void
    setRotation(rotation: number): void
    setScale(scale: number): void
    setStrokeWeight(strokeWeight: number): void
    setStrokeColor(color: string): void
    setStrokeOpacity(opacity: number): void
    setFillOpacity(opacity: number): void
    setFillColor(color: string): void
}
interface Polyline extends Overlay { }
class Polyline {
    constructor(points: Point[], opts?: PolylineOptions)
    setPath(path: Point[]): void
    getPath(): Point[]
    setStrokeColor(color: string): void
    getStrokeColor(): string
    setFillColor(color: string): void
    getFillColor(): string
    setStrokeOpacity(opacity: number): void
    getStrokeOpacity(): number
    setFillOpacity(opacity: number): void
    getFillOpacity(): number
    setStrokeWeight(weight: number): void
    getStrokeWeight(): number
    setStrokeStyle(style: string): void
    getStrokeStyle(): string
    getBounds(): Bounds
    enableEditing(): void
    disableEditing(): void
    enableMassClear(): void
    disableMassClear(): void
    setPointAt(index: number, point: Point): void
    setPositionAt(index: number, point: Point): void
    getMap(): Map
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    onclick: (event: { type: string, target: any }) => void
    ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onremove: (event: { type: string, target: any }) => void
    onlineupdate: (event: { type: string, target: any }) => void
}
interface GroundOverlay extends Overlay { }
class GroundOverlay {
    constructor(bounds: Bounds, opts?: GroundOverlayOptions)
    setBounds(bounds: Bounds): void
    getBounds(): Bounds
    setOpacity(opcity: number): void
    getOpacity(): number
    setImageURL(url: string): void
    getImageURL(): string
    setDisplayOnMinLevel(level: number): void
    getDisplayOnMinLevel(): number
    setDispalyOnMaxLevel(level: number): void
    getDispalyOnMaxLevel(): number
    onclick: (event: { type: string, target: any }) => void
    ondblclick: (event: { type: string, target: any }) => void
}
interface HotspotOptions {
    text?: string
    offsets?: number[]
    userData?: any
    minZoom?: number
    maxZoom?: number
}
interface MapPanes {
    floatPane?: HTMLElement
    markerMouseTarget?: HTMLElement
    floatShadow?: HTMLElement
    labelPane?: HTMLElement
    markerPane?: HTMLElement
    markerShadow?: HTMLElement
    mapPane?: HTMLElement
}

class Panorama {
    constructor(container: string | HTMLElement, opts?: PanoramaOptions)
    getLinks(): PanoramaLink[]
    getId(): string
    getPosition(): Point
    getPov(): PanoramaPov
    getZoom(): number
    setId(id: string): void
    setPosition(position: Point): void
    setPov(pov: PanoramaPov): void
    setZoom(zoom: number): void
    enableScrollWheelZoom(): void
    disableScrollWheelZoom(): void
    show(): void
    hide(): void
    addOverlay(overlay: PanoramaLabel): void
    removeOverlay(overlay: PanoramaLabel): void
    getSceneType(): PanoramaSceneType
    setOptions(opts?: PanoramaOptions): void
    setPanoramaPOIType(): PanoramaPOIType
    onposition_changed: () => void
    onlinks_changed: () => void
    onpov_changed: () => void
    onzoom_changed: () => void
    onscene_type_changed: () => void
}

interface PanoramaOptions {
    navigationControl?: boolean
    linksControl?: boolean
    indoorSceneSwitchControl?: boolean
    albumsControl?: boolean
    albumsControlOptions?: AlbumsControlOptions
}
interface PanoramaLink {
    description: string
    heading: string
    id: string
}
interface PanoramaPov {
    heading: number
    pitch: number
}
class PanoramaService {
    constructor()
    getPanoramaById(id: string, callback: (data: PanoramaData) => void): void
    getPanoramaByLocation(point: Point, radius?: number, callback?: (data: PanoramaData) => void): void
}
interface PanoramaData {
    id: string
    description: string
    links: PanoramaLink[]
    position: Point
    tiles: PanoramaTileData
}
interface PanoramaTileData {
    centerHeading: number
    tileSize: Size
    worldSize: Size
}
class PanoramaLabel {
    constructor(content: string, opts?: PanoramaLabelOptions)
    setPosition(position: Point): void
    getPosition(): Point
    getPov(): PanoramaPov
    setContent(content: string): void
    getContent(): string
    show(): void
    hide(): void
    setAltitude(altitude: number): void
    getAltitude(): number
    addEventListener(event: string, handler: Function): void
    removeEventListener(event: string, handler: Function): void
    onclick: (event: { type: string, target: any }) => void
    onmouseover: (event: { type: string, target: any }) => void
    onmouseout: (event: { type: string, target: any }) => void
    onremove: (event: { type: string, target: any }) => void
}
interface PanoramaLabelOptions {
    position?: Point
    altitude?: number
}
interface AlbumsControlOptions {
    anchor?: ControlAnchor
    offset?: Size
    maxWidth?: number | string
    imageHeight?: number
}
type PanoramaSceneType = string
type PanoramaPOIType = string

type ContextMenuIcon = string
interface MenuItemOptions {
    width?: number
    id?: string
    iconUrl?: string
}
class MenuItem {
    constructor(text: string, callback: (point: Point) => void, opts?: MenuItemOptions)
    setText(text: string): void
    setIcon(iconUrl: string): void
    enable(): void
    disable(): void
}
class ContextMenu {
    constructor()
    addItem(item: MenuItem): void
    getItem(index: number): MenuItem
    removeItem(item: MenuItem): void
    addSeparator(): void
    removeSeparator(index: number): void
    onopen: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    onclose: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
}
class LocalSearch {
    constructor(location: Map | Point | string, opts?: LocalSearchOptions)
    search(keyword: string | Array<string>, option?: Object): void
    searchInBounds(keyword: string | Array<string>, bounds: Bounds, option?: Object): void
    searchNearby(keyword: string | Array<string>, center: LocalResultPoi | string | Point, radius: number, option?: Object): void
    getResults(): LocalResult | LocalResult[]
    clearResults(): void
    gotoPage(page: number): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    enableFirstResultSelection(): void
    disableFirstResultSelection(): void
    setLocation(location: Map | Point | string): void
    setPageCapacity(capacity: number): void
    getPageCapacity(): number
    setSearchCompleteCallback(callback: (results: LocalResult | LocalResult[]) => void): void
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusCode
}
type LineType = number
interface WalkingRouteResult {
    city: string
    getStart(): LocalResultPoi
    getEnd(): LocalResultPoi
    getNumPlans(): number
    getPlan(i: number): RoutePlan
}
class BusLineSearch {
    constructor(location: Map | Point | string, opts?: BusLineSearchOptions)
    getBusList(keyword: string): void
    getBusLine(busLstItem: BusListItem): void
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setLocation(location: Map | Point | string): void
    getStatus(): ServiceStatusCode
    toString(): string
    setGetBusListCompleteCallback(callback: (rs: BusListResult) => void): void
    setGetBusLineCompleteCallback(callback: (rs: BusLine) => void): void
    setBusListHtmlSetCallback(callback: (container: HTMLElement) => void): void
    setBusLineHtmlSetCallback(callback: (container: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (ply: Polyline) => void): void
    setMarkersSetCallback(callback: (markers: Marker[]) => void): void
}
interface LocalSearchOptions {
    renderOptions?: RenderOptions
    onMarkersSet?: (pois: LocalResultPoi[]) => void
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
    pageCapacity?: number
    onSearchComplete?: (results: LocalResult[]) => void
}
class DrivingRoute {
    constructor(location: Map | Point | string, opts?: DrivingRouteOptions)
    search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi, opts?: Object): void
    getResults(): DrivingRouteResult
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setLocation(location: Map | Point | string): void
    setPolicy(policy: DrivingPolicy): void
    setSearchCompleteCallback(callback: (results: DrivingRouteResult) => void): void
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusCode
    toString(): string
}
class Geocoder {
    constructor()
    getPoint(address: string, callback: (point: Point) => void, city: string): void
    getLocation(point: Point, callback: (result: GeocoderResult) => void, opts?: LocationOptions): void
}
interface BusLineSearchOptions {
    renderOptions?: RenderOptions
    onGetBusListComplete?: (rs: BusListResult) => void
    onGetBusLineComplete?: (rs: BusLine) => void
    onBusListHtmlSet?: (container: HTMLElement) => void
    onBusLineHtmlSet?: (container: HTMLElement) => void
    onPolylinesSet?: (ply: Polyline) => void
    onMarkersSet?: (sts: Marker[]) => void
}
interface CustomData {
    geotableId: number
    tags: string
    filter: string
}
interface DrivingRouteOptions {
    renderOptions?: RenderOptions
    policy?: DrivingPolicy
    onSearchComplete?: (results: DrivingRouteResult) => void
    onMarkersSet?: (pois: LocalResultPoi[]) => void
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void
    onPolylinesSet?: (routes: Route[]) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
}
interface GeocoderResult {
    point: Point
    address: string
    addressComponents: AddressComponent
    surroundingPoi: LocalResultPoi[]
    business: string
}
interface BusListResult {
    keyword: string
    city: string
    moreResultsUrl: string
    getNumBusList(): number
    getBusListItem(i: number): BusListItem
}
interface RenderOptions {
    map: Map
    panel?: string | HTMLElement
    selectFirstResult?: boolean
    autoViewport?: boolean
    highlightMode?: HighlightModes
}
type DrivingPolicy = number
interface AddressComponent {
    streetNumber: string
    street: string
    district: string
    city: string
    province: string
}
interface BusLine {
    name: string
    startTime: string
    endTime: string
    company: string
    getNumBusStations(): string
    getBusStation(i: number): BusStation
    getPath(): Point[]
    getPolyline(): Polyline
}
interface LocalResult {
    keyword: string
    center: LocalResultPoi
    radius: number
    bounds: Bounds
    city: string
    moreResultsUrl: string
    province: string
    suggestions: string[]
    getPoi(i: number): LocalResultPoi
    getCurrentNumPois(): number
    getNumPois(): number
    getNumPages(): number
    getPageIndex(): number
    getCityList(): any[]
}

interface DrivingRouteResult {
    policy: DrivingPolicy
    city: string
    moreResultsUrl: string
    taxiFare: TaxiFare
    getStart(): LocalResultPoi
    getEnd(): LocalResultPoi
    getNumPlans(): number
    getPlan(i: number): RoutePlan
}
interface LocationOptions {
    poiRadius?: number
    numPois?: number
}
interface BusListItem {
    name: string
}
interface LocalResultPoi {
    title: string
    point: Point
    url: string
    address: string
    city: string
    phoneNumber: string
    postcode: string
    type: PoiType
    isAccurate: boolean
    province: string
    tags: string[]
    detailUrl: string
}
interface TaxiFare {
    day: TaxiFareDetail
    night: TaxiFareDetail
    distance: number
    remark: string
}
class LocalCity {
    constructor(opts?: LocalCityOptions)
    get(callback: (result: LocalCityResult) => void): void
}
interface BusStation {
    name: string
    position: Point
}
type PoiType = number
interface TaxiFareDetail {
    initialFare: number
    unitFare: number
    totalFare: number
}
interface LocalCityOptions {
    renderOptions?: RenderOptions
}
class Autocomplete {
    constructor(opts?: AutocompleteOptions)
    show(): void
    hide(): void
    setTypes(types: string[]): void
    setLocation(location: string | Map | Point): void
    search(keywords: string): void
    getResults(): AutocompleteResult
    setInputValue(keyword: string): void
    dispose(): void
    onconfirm: (event: { type: string, target: any, item: any }) => void
    onhighlight: (event: { type: string, target: any, fromitem: any, toitem: any }) => void
}
class TransitRoute {
    constructor(location: Map | Point | string, opts?: TransitRouteOptions)
    search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void
    getResults(): TransitRouteResult
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setPageCapacity(capacity: number): void
    setLocation(location: Map | Point | string): void
    setPolicy(policy: TransitPolicy): void
    setSearchCompleteCallback(callback: (results: TransitRouteResult) => void): void
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (lines: Line[], routes: Route[]) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusCode
    toString(): string
}
interface RoutePlan {
    getNumRoutes(): number
    getRoute(i: number): Route
    getDistance(format?: boolean): string | number
    getDuration(format?: boolean): string | number
    getDragPois(): LocalResultPoi[]
}
interface LocalCityResult {
    center: Point
    level: number
    name: string
}
interface AutocompleteOptions {
    location?: string | Map | Point
    types?: string[]
    onSearchComplete?: (result: AutocompleteResult) => void
    input?: string | HTMLElement
}
interface TransitRouteOptions {
    renderOptions?: RenderOptions
    policy?: TransitPolicy
    pageCapacity?: number
    onSearchComplete?: (result: TransitRouteResult) => void
    onMarkersSet?: (pois: LocalResultPoi[], transfers: LocalResultPoi[]) => void
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void
    onPolylinesSet?: (lines: Line[]) => void
    onResultsHtmlSet?: (container: HTMLElement) => void
}
interface Route {
    getNumRoutes(): number
    getStep(i: number): Step
    getDistance(format?: boolean): string | number
    getIndex(): number
    getPolyline(): Polyline
    getPoints(): Point[]
    getPath(): Point[]
    getRouteType(): RouteType
}
class TrafficControl {
    constructor()
    setPanelOffset(offset: Size): void
    show(): void
    hide(): void
}
interface AutocompleteResultPoi {
    province: string
    City: string//wtf
    district: string
    street: string
    streetNumber: string
    business: string
}
type TransitPolicy = number
type RouteType = number
class Geolocation {
    constructor()
    getCurrentPosition(callback: (result: GeolocationResult) => void, opts?: PositionOptions): void
    getStatus(): ServiceStatusCode
}
interface AutocompleteResult {
    keyword: string
    getPoi(i: number): AutocompleteResultPoi
    getNumPois(): number
}
interface TransitRouteResult {
    policy: TransitPolicy
    city: string
    moreResultsUrl: string
    getStart(): LocalResultPoi
    getEnd(): LocalResultPoi
    getNumPlans(): number
    getPlan(i: number): TransitRoutePlan
}
interface Step {
    getPoint(): Point
    getPosition(): Point
    getIndex(): number
    getDescription(includeHtml: boolean): string
    getDistance(format?: boolean): string | number
}
interface GeolocationResult {
    point: Point
    accuracy: number
}
class Boundary {
    constructor()
    get(name: string, callback: (result: string[]) => void): void
}
interface TransitRoutePlan {
    getNumLines(): number
    getLine(i: number): Line
    getNumRoutes(): number
    getRoute(i: number): Route
    getDistance(format?: boolean): string | number
    getDuration(format?: boolean): string | number
    getDescription(includeHtml: boolean): string
}
class WalkingRoute {
    constructor(location: Map | Point | string, opts?: WalkingRouteOptions)
    search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void
    getResults(): WalkingRouteResult
    clearResults(): void
    enableAutoViewport(): void
    disableAutoViewport(): void
    setLocation(location: Map | Point | string): void
    setSearchCompleteCallback(callback: (result: WalkingRouteResult) => void): void
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void
    getStatus(): ServiceStatusCode
    toString(): string
}
interface PositionOptions {
    enableHighAccuracy?: boolean
    timeout?: number
    maximumAge?: number
}
interface Line {
    title: string
    type: LineType
    getNumViaStops(): number
    getGetOnStop(): LocalResultPoi
    getGetOffStop(): LocalResultPoi
    getPoints(): Point[]
    getPath(): Point[]
    getPolyline(): Polyline
    getDistance(format?: boolean): string | number
}
interface WalkingRouteOptions {
    renderOptions?: RenderOptions,
    onSearchComplete?: (result: WalkingRouteResult) => void,
    onMarkersSet?: (pois: LocalResultPoi[]) => void,
    onPolylinesSet?: (routes: Route[]) => void,
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void,
    onResultsHtmlSet?: (container: HTMLElement) => void
}
type HighlightModes = number
type ServiceStatusCode = number

class PushpinTool {
    constructor(map: Map, opts?: PushpinToolOptions)
    open(): boolean
    close(): boolean
    setIcon(icon: Icon): Icon
    getIcon(): Icon
    setCursor(cursor: string): string
    getCursor(): string
    toString(): string
    onmarkend: (event: { type: string, target: any, marker: Marker }) => void
}
interface PushpinToolOptions {
    icon?: Icon
    cursor?: string
    followText?: string
}
class DistanceTool {
    constructor(map: Map)
    open(): boolean
    close(): void
    toString(): string
    ondrawend: (event: { type: string, target: any, points: Point[], polylines: Polyline[], distance: number }) => void
}
class DragAndZoomTool {
    constructor(map: Map, opts?: DragAndZoomToolOptions)
    open(): boolean
    close(): void
    toString(): string
    ondrawend: (event: { type: string, target: any, bounds: Bounds[] }) => void
}
interface DragAndZoomToolOptions {
    zoomType?: ZoomType,
    autoClose?: boolean,
    followText?: string
}
type ZoomType = number

}

declare const BMAP_UNIT_METRIC: BMap.LengthUnit
declare const BMAP_UNIT_IMPERIAL: BMap.LengthUnit
declare const BMAP_ANCHOR_TOP_LEFT: BMap.ControlAnchor
declare const BMAP_ANCHOR_TOP_RIGHT: BMap.ControlAnchor
declare const BMAP_ANCHOR_BOTTOM_LEFT: BMap.ControlAnchor
declare const BMAP_ANCHOR_BOTTOM_RIGHT: BMap.ControlAnchor
declare const BMAP_NAVIGATION_CONTROL_LARGE: BMap.NavigationControlType
declare const BMAP_NAVIGATION_CONTROL_SMALL: BMap.NavigationControlType
declare const BMAP_NAVIGATION_CONTROL_PAN: BMap.NavigationControlType
declare const BMAP_NAVIGATION_CONTROL_ZOOM: BMap.NavigationControlType
declare const BMAP_MAPTYPE_CONTROL_HORIZONTAL: BMap.MapTypeControlType
declare const BMAP_MAPTYPE_CONTROL_DROPDOWN: BMap.MapTypeControlType
declare const BMAP_MAPTYPE_CONTROL_MAP: BMap.MapTypeControlType
declare const BMAP_STATUS_PERMISSION_DENIED: BMap.StatusCode
declare const BMAP_STATUS_SERVICE_UNAVAILABLE: BMap.StatusCode
declare const BMAP_STATUS_TIMEOUT: BMap.StatusCode
declare const BMAP_API_VERSION: BMap.APIVersion
declare const BMAP_POINT_DENSITY_HIGH: BMap.PointDensityType
declare const BMAP_POINT_DENSITY_MEDIUM: BMap.PointDensityType
declare const BMAP_POINT_DENSITY_LOW: BMap.PointDensityType
declare const BMAP_NORMAL_MAP: BMap.MapType
declare const BMAP_PERSPECTIVE_MAP: BMap.MapType
declare const BMAP_SATELLITE_MAP: BMap.MapType
declare const BMAP_HYBRID_MAP: BMap.MapType
declare const BMap_Symbol_SHAPE_CIRCLE: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_RECTANGLE: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_RHOMBUS: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_STAR: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_POINT: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_PLANE: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_CAMERA: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_WARNING: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_SMILE: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_CLOCK: BMap.SymbolShapeType
declare const BMAP_ANIMATION_DROP: BMap.Animation
declare const BMAP_ANIMATION_BOUNCE: BMap.Animation
declare const BMAP_POINT_SHAPE_CIRCLE: BMap.ShapeType
declare const APE_STAR: BMap.ShapeType
declare const APE_SQUARE: BMap.ShapeType
declare const APE_RHOMBUS: BMap.ShapeType
declare const APE_WATERDROP: BMap.ShapeType
declare const BMAP_POINT_SIZE_TINY: BMap.SizeType
declare const BMAP_POINT_SIZE_SMALLER: BMap.SizeType
declare const BMAP_POINT_SIZE_SMALL: BMap.SizeType
declare const BMAP_POINT_SIZE_NORMAL: BMap.SizeType
declare const BMAP_POINT_SIZE_BIG: BMap.SizeType
declare const BMAP_POINT_SIZE_BIGGER: BMap.SizeType
declare const BMAP_POINT_SIZE_HUGE: BMap.SizeType
declare const BMAP_PANORAMA_INDOOR_SCENE: string
declare const BMAP_PANORAMA_STREET_SCENE: string
declare const BMAP_PANORAMA_POI_HOTEL: string
declare const BMAP_PANORAMA_POI_CATERING: string
declare const BMAP_PANORAMA_POI_MOVIE: string
declare const BMAP_PANORAMA_POI_TRANSIT: string
declare const BMAP_PANORAMA_POI_INDOOR_SCENE: string
declare const BMAP_PANORAMA_POI_NONE: string
declare const BMAP_CONTEXT_MENU_ICON_ZOOMIN: string
declare const BMAP_CONTEXT_MENU_ICON_ZOOMOUT: string
declare const BMAP_LINE_TYPE_BUS: BMap.LineType
declare const BMAP_LINE_TYPE_SUBWAY: BMap.LineType
declare const BMAP_LINE_TYPE_FERRY: BMap.LineType
declare const BMAP_DRIVING_POLICY_LEAST_TIME: BMap.DrivingPolicy
declare const BMAP_DRIVING_POLICY_LEAST_DISTANCE: BMap.DrivingPolicy
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: BMap.DrivingPolicy
declare const BMAP_POI_TYPE_NORMAL: BMap.PoiType
declare const BMAP_POI_TYPE_BUSSTOP: BMap.PoiType
declare const BMAP_POI_TYPE_SUBSTOP: BMap.PoiType
declare const BMAP_TRANSIT_POLICY_LEAST_TIME: BMap.TransitPolicy
declare const BMAP_TRANSIT_POLICY_LEAST_TRANSFER: BMap.TransitPolicy
declare const BMAP_TRANSIT_POLICY_LEAST_WALKING: BMap.TransitPolicy
declare const BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: BMap.TransitPolicy
declare const BMAP_ROUTE_TYPE_DRIVING: BMap.RouteType
declare const BMAP_ROUTE_TYPE_WALKING: BMap.RouteType
declare const BMAP_HIGHLIGHT_STEP: BMap.HighlightModes
declare const BMAP_HIGHLIGHT_ROUTE: BMap.HighlightModes
declare const BMAP_STATUS_SUCCESS: BMap.ServiceStatusCode
declare const BMAP_STATUS_CITY_LIST: BMap.ServiceStatusCode
declare const BMAP_STATUS_UNKNOWN_LOCATION: BMap.ServiceStatusCode
declare const BMAP_STATUS_UNKNOWN_ROUTE: BMap.ServiceStatusCode
declare const BMAP_STATUS_INVALID_KEY: BMap.ServiceStatusCode
declare const BMAP_STATUS_INVALID_REQUEST: BMap.ServiceStatusCode
declare const BMAP_ZOOM_IN: BMap.ZoomType
declare const BMAP_ZOOM_OUT: BMap.ZoomType

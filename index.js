
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
export interface BaiduMap {
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
export interface PanOptions {
  noAnimation?: boolean
}
export interface MapOptions {
  minZoom?: number
  maxZoom?: number
  mapType?: MapType
  enableHighResolution?: boolean
  enableAutoResize?: boolean
  enableMapClick?: boolean
}
export interface Viewport {
  center: Point
  zoom: number
}
export interface ViewportOptions {
  enableAnimation?: boolean
  margins?: number[]
  zoomFactor?: number
  delay?: number
}
//type APIVersion = number
export interface MapStyle {
  features: any[]
  style: string
}
//declare const BMAP_API_VERSION: BMap.APIVersion

export interface Point {
  constructor(lng: number, lat: number)
  lng: number
  lat: number
  equals(other: Point): boolean
}
export interface Pixel {
  constructor(x: number, y: number)
  x: number
  y: number
  equals(other: Pixel): boolean
}
export interface Size {
  constructor(width: number, height: number)
  width: number
  height: number
  equals(other: Size): boolean
}
export interface Bounds {
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

export interface MapType {
  constructor(name: string, layers: TileLayer | TileLayer[], opts?: MapTypeOptions)
  getName(): string
  getTileLayer(): TileLayer
  getMinZoom(): number
  getMaxZoom(): number
  getProjection(): Projection
  getTextColor(): string
  getTips(): string
}
export interface MapTypeOptions {
  minZoom?: number
  maxZoom?: number
  errorImageUrl?: string
  textColor?: number
  tips?: string
}
export interface Projection {
  lngLatToPoint(lngLat: Point): Pixel
  pointToLngLat(point: Pixel): Point
}
export interface MercatorProjection extends Projection {
}
export interface PerspectiveProjection extends Projection {
}

export interface Panorama {
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

export interface PanoramaOptions {
  navigationControl?: boolean
  linksControl?: boolean
  indoorSceneSwitchControl?: boolean
  albumsControl?: boolean
  albumsControlOptions?: AlbumsControlOptions
}
export interface PanoramaLink {
  description: string
  heading: string
  id: string
}
export interface PanoramaPov {
  heading: number
  pitch: number
}
export interface PanoramaService {
  constructor()
  getPanoramaById(id: string, callback: (data: PanoramaData) => void): void
  getPanoramaByLocation(point: Point, radius?: number, callback?: (data: PanoramaData) => void): void
}
export interface PanoramaData {
  id: string
  description: string
  links: PanoramaLink[]
  position: Point
  tiles: PanoramaTileData
}
export interface PanoramaTileData {
  centerHeading: number
  tileSize: Size
  worldSize: Size
}
export interface PanoramaLabel {
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
export interface PanoramaLabelOptions {
  position?: Point
  altitude?: number
}
export interface AlbumsControlOptions {
  anchor?: ControlAnchor
  offset?: Size
  maxWidth?: number | string
  imageHeight?: number
}
type PanoramaSceneType = string
type PanoramaPOIType = string

export interface Control {
  constructor()
  defaultAnchor: ControlAnchor
  defaultOffset: Size
  initialize(map: BaiduMap): HTMLElement
  setAnchor(anchor: ControlAnchor): void
  getAnchor(): ControlAnchor
  setOffset(offset: Size): void
  getOffset(): Size
  show(): void
  hide(): void
  isVisible(): boolean
}
export interface NavigationControlOptions {
  anchor?: ControlAnchor
  offset?: Size
  type?: NavigationControlType
  showZoomInfo?: boolean
  enableGeolocation?: boolean
}
export interface ScaleControlOptions {
  anchor?: ControlAnchor
  offset?: Size
}
export interface CopyrightControlOptions {
  anchor?: ControlAnchor
  offset?: Size
}
type ControlAnchor = number
export interface OverviewMapControl extends Control {
  // constructor(opts: OverviewMapControlOptions)
  changeView(): void
  setSize(size: Size): void
  getSize(): Size
  onviewchanged: (event: { type: string, target: any, isOpen: boolean }) => void
  onviewchanging: (event: { type: string, target: any }) => void
}
type LengthUnit = string
export interface MapTypeControl extends Control {
  constructor(opts?: MapTypeControlOptions)
}
export interface NavigationControl extends Control {
  constructor(opts?: NavigationControlOptions)
  getType(): NavigationControlOptions
  setType(type: NavigationControlType): void
}
export interface OverviewMapControlOptions {
  anchor?: ControlAnchor
  offset?: Size
  size?: Size
  isOpen?: boolean
}
export interface CopyrightControl extends Control {
  constructor(opts?: CopyrightControlOptions)
  addCopyright(copyright: Copyright): void
  removeCopyright(id: number): void
  getCopyright(id: number): Copyright
  getCopyrightCollection(): Copyright[]
}
export interface MapTypeControlOptions {
  type?: MapTypeControlType,
  mapTypes?: MapType[]
}
type NavigationControlType = number
export interface ScaleControl extends Control {
  constructor(opts?: ScaleControlOptions)
  getUnit(): LengthUnit
  setUnit(unit: LengthUnit): void
}
export interface Copyright {
  id?: number
  content?: string
  bounds?: Bounds
}
type MapTypeControlType = number
export interface GeolocationControl extends Control {
  constructor(opts?: GeolocationControlOptions)
}
export interface GeolocationControlOptions {
  anchor?: ControlAnchor
  offset?: Size
  showAddressBar?: boolean
  enableAutoLocation?: boolean
  locationIcon?: Icon
}
type StatusCode = number
export interface PanoramaControl extends Control {
  constructor()
}

export interface Overlay {
  initialize?(map: BaiduMap): HTMLElement
  isVisible?(): boolean
  draw?(): void
  show?(): void
  hide?(): void
}
type SymbolShapeType = number
export interface PolylineOptions {
  strokeColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  strokeStyle?: string
  enableMassClear?: boolean
  enableEditing?: boolean
  enableClicking?: boolean
}
export interface GroundOverlayOptions {
  opacity?: number
  imageURL?: string
  displayOnMinLevel?: number
  displayOnMaxLevel?: number
}
export interface Marker extends Overlay { }
export interface Marker {
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
  getMap(): BaiduMap
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
export interface SymbolOptions {
  anchor?: Size
  fillColor?: string
  fillOpacity?: number
  scale?: number
  rotation?: number
  strokeColor?: string
  strokeOpacity?: number
  strokeWeight?: number
}
export interface IconSequence {
  constructor(symbol: Symbol, offset?: string, repeat?: string, fixedRotation?: boolean)
}
export interface PointCollection extends Overlay { }
export interface PointCollection {
  constructor(points: Point[], opts?: PointCollectionOption)
  setPoints(points: Point[]): void
  setStyles(styles: PointCollectionOption): void
  clear(): void
  onclick: (event: { type: string, target: any, point: Point }) => void
  onmouseover: (event: { type: string, target: any, point: Point }) => void
  onmouseout: (event: { type: string, target: any, point: Point }) => void
}
export interface MarkerOptions {
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
export interface InfoWindow extends Overlay { }
export interface InfoWindow {
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
export interface Polygon extends Overlay { }
export interface Polygon {
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
  getMap(): BaiduMap
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
export interface PointCollectionOption {
  shape?: ShapeType
  color?: string
  size?: SizeType
}
type Animation = number
export interface InfoWindowOptions {
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
export interface PolygonOptions {
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
export interface Icon extends Overlay { }
export interface Icon {
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
export interface AddressComponents {
  streetNumber: string;
  street: string;
  district: string;
  city: string;
  province: string;
}

export interface PlaceResult {
  addressComponents: AddressComponents;
  point: Point;
  address: string;
}

export interface Label extends Overlay { }
export interface Label {
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
  getMap(): BaiduMap
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
export interface Circle extends Overlay { }
export interface Circle {
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
  getMap(): BaiduMap
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
export interface IconOptions {
  anchor?: Size
  imageOffset?: Size
  infoWindowAnchor?: Size
  printImageUrl?: string
}
export interface LabelOptions {
  offset?: Size
  position?: Point
  enableMassClear?: boolean
}
export interface CircleOptions {
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
export interface Hotspot extends Overlay { }
export interface Hotspot {
  constructor(position: Point, opts?: HotspotOptions)
  setPosition(position: Point): void
  getPosition(): Point
  setText(text: string): void
  getText(): string
  setUserData(data: any): void
  getUserData(): any
}
export interface Symbol extends Overlay { }
export interface Symbol {
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
export interface Polyline extends Overlay { }
export interface Polyline {
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
  getMap(): BaiduMap
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
export interface GroundOverlay extends Overlay { }
export interface GroundOverlay {
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
export interface HotspotOptions {
  text?: string
  offsets?: number[]
  userData?: any
  minZoom?: number
  maxZoom?: number
}
export interface MapPanes {
  floatPane?: HTMLElement
  markerMouseTarget?: HTMLElement
  floatShadow?: HTMLElement
  labelPane?: HTMLElement
  markerPane?: HTMLElement
  markerShadow?: HTMLElement
  mapPane?: HTMLElement
}

export interface PushpinTool {
  //  constructor(map: Map, opts?: PushpinToolOptions)
  open(): boolean
  close(): boolean
  setIcon(icon: Icon): Icon
  getIcon(): Icon
  setCursor(cursor: string): string
  getCursor(): string
  toString(): string
  onmarkend: (event: { type: string, target: any, marker: Marker }) => void
}
export interface PushpinToolOptions {
  icon?: Icon
  cursor?: string
  followText?: string
}
export interface DistanceTool {
  //constructor(map: Map)
  open(): boolean
  close(): void
  toString(): string
  ondrawend: (event: { type: string, target: any, points: Point[], polylines: Polyline[], distance: number }) => void
}
export interface DragAndZoomTool {
  // constructor(map: Map, opts?: DragAndZoomToolOptions)
  open(): boolean
  close(): void
  toString(): string
  ondrawend: (event: { type: string, target: any, bounds: Bounds[] }) => void
}
export interface DragAndZoomToolOptions {
  zoomType?: ZoomType,
  autoClose?: boolean,
  followText?: string
}
type ZoomType = number;

export interface TileLayer {
  constructor(opts?: TileLayerOptions)
  getTilesUrl(tileCoord: Pixel, zoom: number): string
  getCopyright(): Copyright
  isTransparentPng(): boolean
}
export interface TileLayerOptions {
  transparentPng?: boolean
  tileUrlTemplate?: string
  copyright?: Copyright
  zIndex?: number
}
export interface TrafficLayer extends TileLayer {
  // constructor(opts?: TrafficLayerOptions)
}
export interface TrafficLayerOptions {
  predictDate?: PredictDate
}
export interface PredictDate {
  weekday: number
  hour: number
}
export interface CustomLayer extends TileLayer {
  //constructor(opts: CustomLayerOptions)
  onhotspotclick: (event: { type: string, target: any, content: any }) => void
}
export interface Custompoi {
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
export interface PanoramaCoverageLayer extends TileLayer {
  constructor()
}
export interface CustomLayerOptions {
  databoxId?: string
  geotableId?: string
  q?: string
  tags?: string
  filter?: string
  pointDensityType?: PointDensityType
}
type PointDensityType = number;

export interface TileLayer {
  //constructor(opts?: TileLayerOptions)
  getTilesUrl(tileCoord: Pixel, zoom: number): string
  getCopyright(): Copyright
  isTransparentPng(): boolean
}
export interface TileLayerOptions {
  transparentPng?: boolean
  tileUrlTemplate?: string
  copyright?: Copyright
  zIndex?: number
}
export interface TrafficLayer extends TileLayer {
  // constructor(opts?: TrafficLayerOptions)
}
export interface TrafficLayerOptions {
  predictDate?: PredictDate
}
export interface PredictDate {
  weekday: number
  hour: number
}
export interface CustomLayer extends TileLayer {
  // constructor(opts: CustomLayerOptions)
  onhotspotclick: (event: { type: string, target: any, content: any }) => void
}
export interface Custompoi {
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
export interface PanoramaCoverageLayer extends TileLayer {
  constructor()
}
export interface CustomLayerOptions {
  databoxId?: string
  geotableId?: string
  q?: string
  tags?: string
  filter?: string
  pointDensityType?: PointDensityType
}
export interface MenuItemOptions {
  width?: number
  id?: string
  iconUrl?: string
}
export interface MenuItem {
  constructor(text: string, callback: (point: Point) => void, opts?: MenuItemOptions)
  setText(text: string): void
  setIcon(iconUrl: string): void
  enable(): void
  disable(): void
}
export interface ContextMenu {
  constructor()
  addItem(item: MenuItem): void
  getItem(index: number): MenuItem
  removeItem(item: MenuItem): void
  addSeparator(): void
  removeSeparator(index: number): void
  onopen: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
  onclose: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
}

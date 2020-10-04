declare module "fitfont" {
    /**
     * Horizontal alignment
     */
    type HorizontalAlign = "start" | "middle" | "end";

    /**
     * Vertical alignment
     */
    type VerticalAlign = "top" | "middle" | "bottom" | "baseline";

    /**
     * Option to initialize a fitfont class
     */
    interface Options {
        /**
         * Id fo the symbol or the Element to use
         */
        id: string | Element;
        /**
         * name of the generated font folder
         */
        font: string;
        /**
         * Horizontal alignment
         */
        halign?: HorizontalAlign;
        /**
         * Vertical alignment
         */
        valign?: VerticalAlign;
        /**
         * Letter spacing
         */
        letterspacing?: number;
    }

    /**
     * Fitfont class to use cutom fonts
     */
    class FitFont {
        constructor(options: Options);

        /**
         * Force the redraw
         */
        redraw(): void;

        /**
         * Text to show
         */
        text: string;

        /**
         * Horizontal alignment
         */
        halign: HorizontalAlign;

        /**
         * Vertical alignment
         */
        valign: VerticalAlign;

        /**
         * Letter spacing
         */
        letterspacing: number;

        /**
         * With (read only)
         */
        readonly width: number;
    }
}
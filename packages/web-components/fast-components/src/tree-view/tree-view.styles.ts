import { css, ElementStyles } from "@microsoft/fast-element";
import {
    display,
    ElementDefinitionContext,
    FoundationElementDefinition,
} from "@microsoft/fast-foundation";

/**
 * Styles for Tree View
 * @public
 */
export const treeViewStyles: (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => ElementStyles = (
    context: ElementDefinitionContext,
    definition: FoundationElementDefinition
) => css`
    ${display("flex")} :host {
        flex-direction: column;
        align-items: stretch;
        min-width: fit-content;
        font-size: 0;
    }

    :host:focus-visible {
        outline: none;
    }
`;

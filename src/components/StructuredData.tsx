interface StructuredDataProps {
    schema: object;
}

const StructuredData = ({ schema }: StructuredDataProps) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
);

export default StructuredData;

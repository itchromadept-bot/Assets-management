import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottom: '1px solid #E0E0E0',
        paddingBottom: 10,
    },
    logo: {
        width: 150,
        height: 50,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
    section: {
        marginBottom: 15,
        border: '1px solid #DCDCDC',
        borderRadius: 8,
        padding: 15,
    },
    subHeading: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#34495E',
        borderBottom: '1px solid #DCDCDC',
        paddingBottom: 5,
    },
    fieldRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginBottom: 5,
    },
    field: {
        fontSize: 11,
        marginBottom: 5,
        width: '50%',
    },
    label: {
        fontWeight: 'bold',
        marginRight: 5,
        color: '#7F8C8D',
    },
    value: {
        color: '#2C3E50',
    },
    fullWidthField: {
        fontSize: 11,
        marginBottom: 5,
    },
    signatureSection: {
        marginTop: 40,
        borderTop: '1px solid #DCDCDC',
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    signatureBlock: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
    },
    signatureLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#000000',
        marginTop: 40,
    },
    signatureText: {
        fontSize: 10,
        marginTop: 5,
    },
});

const AssetPDF = ({ asset }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.subHeading}>Chromaesthetics Inc</Text>
                <Text style={styles.title}>IT Asset Clearance Form</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subHeading}>Employee Information</Text>
                <View style={styles.fieldRow}>
                    <Text style={styles.field}><Text style={styles.label}>Date:</Text> <Text style={styles.value}>{asset.date}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Employee ID:</Text> <Text style={styles.value}>{asset.employee_id}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Name:</Text> <Text style={styles.value}>{asset.name}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Position:</Text> <Text style={styles.value}>{asset.position}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Department:</Text> <Text style={styles.value}>{asset.department}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Email:</Text> <Text style={styles.value}>{asset.email}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Company:</Text> <Text style={styles.value}>{asset.company}</Text></Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.subHeading}>IT Assets</Text>
                <View style={styles.fieldRow}>
                    <Text style={styles.field}><Text style={styles.label}>Laptop:</Text> <Text style={styles.value}>{asset.laptop}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Laptop Status:</Text> <Text style={styles.value}>{asset.laptop_status}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Laptop Tag #:</Text> <Text style={styles.value}>{asset.laptop_tag_num}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Company Phone:</Text> <Text style={styles.value}>{asset.company_phone}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Phone Status:</Text> <Text style={styles.value}>{asset.phone_status}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Phone Tag #:</Text> <Text style={styles.value}>{asset.phone_tag_num}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Company Desktop:</Text> <Text style={styles.value}>{asset.company_desktop}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Desktop Status:</Text> <Text style={styles.value}>{asset.desktop_status}</Text></Text>
                    <Text style={styles.field}><Text style={styles.label}>Desktop Tag #:</Text> <Text style={styles.value}>{asset.desktop_tag_num}</Text></Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.subHeading}>Additional Information</Text>
                <Text style={styles.fullWidthField}><Text style={styles.label}>Others:</Text> <Text style={styles.value}>{asset.others}</Text></Text>
                <Text style={styles.fullWidthField}><Text style={styles.label}>Others Status:</Text> <Text style={styles.value}>{asset.others_status}</Text></Text>
                <Text style={styles.fullWidthField}><Text style={styles.label}>Others Tag #:</Text> <Text style={styles.value}>{asset.others_tag_num}</Text></Text>
                <Text style={styles.fullWidthField}><Text style={styles.label}>Software List:</Text> <Text style={styles.value}>{asset.software_list}</Text></Text>
                <Text style={styles.fullWidthField}><Text style={styles.label}>Intended Use:</Text> <Text style={styles.value}>{asset.intended_use}</Text></Text>
                <Text style={styles.fullWidthField}><Text style={styles.label}>Remarks:</Text> <Text style={styles.value}>{asset.remarks}</Text></Text>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.subHeading}>Clearance Status</Text>
                <Text style={styles.fullWidthField}><Text style={styles.label}>Status:</Text> <Text style={styles.value}>{asset.status}</Text></Text>
            </View>
        </Page>
        
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>Clearance Signatures</Text>
            <View style={styles.signatureSection}>
                <View style={styles.signatureBlock}>
                    <View style={styles.signatureLine}></View>
                    <Text style={styles.signatureText}>Employee Name and Signature</Text>
                </View>
                <View style={styles.signatureBlock}>
                    <View style={styles.signatureLine}></View>
                    <Text style={styles.signatureText}>Noted By: (Name and Signature)</Text>
                </View>
                <View style={styles.signatureBlock}>
                    <View style={styles.signatureLine}></View>
                    <Text style={styles.signatureText}>Approved By: (Name and Signature)</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export const DownloadButton = ({ asset }) => (
    <PDFDownloadLink
        document={<AssetPDF asset={asset} />}
        fileName={`asset-form-${asset.employee_id}.pdf`}
        style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}
    >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
    </PDFDownloadLink>
);
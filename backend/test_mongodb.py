from pymongo import MongoClient
import gridfs
from dotenv import load_dotenv
import os

load_dotenv()

# Use same connection string as app.py
uri = os.getenv("MONGO_URI", "mongodb+srv://srijan:IIT-IIM-RESUME@iit.itbdk24.mongodb.net/?retryWrites=true&w=majority&appName=IIT")

import socket
import urllib.parse
from urllib.parse import urlparse

print("=== MongoDB Connection Diagnostics ===")

# Parse MongoDB URI
parsed_uri = urlparse(uri)
hostname = parsed_uri.hostname
port = parsed_uri.port or 27017

print(f"Connecting to: {hostname}:{port}")
print("Testing network connectivity...")

try:
    # Test basic network connectivity
    sock = socket.create_connection((hostname, port), timeout=5)
    sock.close()
    print("✓ Network connection successful")
except Exception as e:
    print(f"❌ Network connection failed: {str(e)}")
    print("Please check:")
    print("- Internet connectivity")
    print("- Firewall settings")
    print("- MongoDB server status")

print("\nAttempting MongoDB connection...")
print(f"Using URI: {uri.split('@')[0]}@[redacted]")

try:
    # Connect with explicit SSL configuration
    try:
        client = MongoClient(uri,
                             tls=True,
                             connectTimeoutMS=10000)
        client.admin.command('ping')
        print("✓ Method 1: Standard SSL connection successful")
    except Exception as e:
        print(f"❌ Method 1 failed: {str(e)}")

    print("\nAttempting connection method 2: Legacy SSL...")
    try:
        client = MongoClient(uri,
                             ssl=True,
                             ssl_cert_reqs='CERT_NONE',
                             connectTimeoutMS=10000)
        client.admin.command('ping')
        print("✓ Method 2: Legacy SSL connection successful")
    except Exception as e:
        print(f"❌ Method 2 failed: {str(e)}")

    print("\nAttempting connection method 3: No SSL (for testing only)...")
    try:
        # Remove +srv and change port for direct connection
        test_uri = uri.replace('+srv', '').replace('mongodb.net/', 'mongodb.net:27017/')
        client = MongoClient(test_uri,
                             ssl=False,
                             connectTimeoutMS=10000)
        client.admin.command('ping')
        print("✓ Method 3: No SSL connection successful")
        print("WARNING: This is insecure and should only be used for testing")
    except Exception as e:
        print(f"❌ Method 3 failed: {str(e)}")
        print("All connection methods failed. Please check:")
        print("- MongoDB Atlas whitelist settings")
        print("- Network firewall rules")
        print("- OpenSSL installation (try: openssl version)")

    print("Connection established, checking database...")

    # Verify connection works
    client.admin.command('ping')
    print("✓ MongoDB server ping successful")

    db = client['cv_database']
    print(f"Using database: {db.name}")

    # Test connection by listing collections
    collections = db.list_collection_names()
    print(f"✓ Found {len(collections)} collections: {collections}")

    # Test GridFS connection
    fs = gridfs.GridFS(db)
    print("✓ GridFS connection successful")

    # Test basic GridFS operations
    test_file = b"test content"
    file_id = fs.put(test_file, filename="test.txt")
    print(f"✓ Test file stored with ID: {file_id}")

    # Clean up test file
    fs.delete(file_id)
    print("✓ Test file cleaned up")

except Exception as e:
    print("\n❌ MongoDB connection failed!")
    print("Error details:")
    print(f"- Type: {type(e).__name__}")
    print(f"- Message: {str(e)}")
    print("\nTroubleshooting tips:")
    print("- Verify MongoDB URI is correct in .env file")
    print("- Check network connectivity to MongoDB server")
    print("- Verify credentials and permissions")
    print("- Check if MongoDB server is running")